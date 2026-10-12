import { createHmac, timingSafeEqual } from "crypto";
import { access, readFile } from "fs/promises";
import path from "path";
import { get, head } from "@vercel/blob";

export const KIT_FILES = {
  guide: {
    filename: "First-Lead-Campaign-Kit-Guide.pdf",
    contentType: "application/pdf",
  },
  workbook: {
    filename: "First-Lead-Campaign-Kit-Workbook.xlsx",
    contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  },
} as const;

export type KitFileKey = keyof typeof KIT_FILES;

const TOKEN_TTL_MS = 7 * 24 * 60 * 60 * 1000;

export function kitFilePath(file: KitFileKey): string {
  return path.join(
    process.cwd(),
    "private-products",
    "first-lead-campaign",
    KIT_FILES[file].filename
  );
}

export function kitBlobPath(file: KitFileKey): string {
  return `first-lead-campaign/${KIT_FILES[file].filename}`;
}

/** A connected private Blob store. OIDC on Vercel uses BLOB_STORE_ID, not a read-write token. */
export function kitUsesBlob(): boolean {
  return Boolean(process.env.BLOB_STORE_ID?.trim() || process.env.BLOB_READ_WRITE_TOKEN?.trim());
}

type KitBlobClient = {
  head: (pathname: string) => Promise<unknown>;
  get: (
    pathname: string,
    options: { access: "private"; useCache: false }
  ) => Promise<{ statusCode: number; stream: ReadableStream<Uint8Array> | null } | null>;
};

function blobClient(): KitBlobClient {
  // Local tests inject a stand-in. Production runs with NODE_ENV=production.
  if (process.env.NODE_ENV === "test") {
    const injected = (globalThis as { __kitBlob?: KitBlobClient }).__kitBlob;
    if (injected) return injected;
  }
  return { head, get };
}

export async function kitFileAvailable(file: KitFileKey): Promise<boolean> {
  if (kitUsesBlob()) {
    try {
      await blobClient().head(kitBlobPath(file));
      return true;
    } catch (error) {
      console.error("Kit file check failed:", file, error instanceof Error ? error.name : "error");
      return false;
    }
  }

  try {
    await access(kitFilePath(file));
    return true;
  } catch {
    return false;
  }
}

export async function openKitFile(file: KitFileKey): Promise<BodyInit | null> {
  if (kitUsesBlob()) {
    const result = await blobClient().get(kitBlobPath(file), { access: "private", useCache: false });
    if (!result || result.statusCode !== 200) return null;
    return result.stream;
  }

  try {
    return await readFile(kitFilePath(file));
  } catch {
    return null;
  }
}

function signingSecret(): string | null {
  const secret = process.env.RESEND_API_KEY?.trim();
  return secret || null;
}

export function createKitDownloadToken(email: string): string | null {
  const secret = signingSecret();
  if (!secret) return null;
  const payload = Buffer.from(
    JSON.stringify({ email, exp: Date.now() + TOKEN_TTL_MS })
  ).toString("base64url");
  const signature = createHmac("sha256", secret).update(payload).digest("base64url");
  return `${payload}.${signature}`;
}

export function verifyKitDownloadToken(
  token: string
): { email: string } | "expired" | null {
  const secret = signingSecret();
  if (!secret) return null;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return null;

  const expected = createHmac("sha256", secret).update(payload).digest("base64url");
  const actualBuf = Buffer.from(signature);
  const expectedBuf = Buffer.from(expected);
  if (actualBuf.length !== expectedBuf.length || !timingSafeEqual(actualBuf, expectedBuf)) {
    return null;
  }

  try {
    const parsed = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as {
      email?: string;
      exp?: number;
    };
    if (!parsed.email || typeof parsed.exp !== "number") return null;
    if (parsed.exp < Date.now()) return "expired";
    return { email: parsed.email };
  } catch {
    return null;
  }
}

export function kitDownloadUrl(origin: string, file: KitFileKey, token: string): string {
  const url = new URL("/api/first-lead-campaign/download", origin);
  url.searchParams.set("file", file);
  url.searchParams.set("token", token);
  return url.toString();
}
