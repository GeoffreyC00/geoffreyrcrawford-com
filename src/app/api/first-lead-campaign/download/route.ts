import { NextResponse } from "next/server";
import {
  KIT_FILES,
  openKitFile,
  verifyKitDownloadToken,
  type KitFileKey,
} from "@/lib/products/first-lead-kit-delivery";

export const dynamic = "force-dynamic";

function isKitFile(value: string | null): value is KitFileKey {
  return value === "guide" || value === "workbook";
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const file = url.searchParams.get("file");
  const token = url.searchParams.get("token") ?? "";

  if (!isKitFile(file)) {
    return NextResponse.json({ error: "This download link is not valid." }, { status: 401 });
  }

  const verified = verifyKitDownloadToken(token);
  if (verified === "expired") {
    return NextResponse.json(
      {
        error:
          "This download link has expired. Submit the form on the kit page again for a fresh email.",
      },
      { status: 401 }
    );
  }
  if (!verified) {
    return NextResponse.json({ error: "This download link is not valid." }, { status: 401 });
  }

  const body = await openKitFile(file);
  if (!body) {
    return NextResponse.json({ error: "The file is not available right now." }, { status: 404 });
  }

  return new NextResponse(body, {
    headers: {
      "Content-Type": KIT_FILES[file].contentType,
      "Content-Disposition": `attachment; filename="${KIT_FILES[file].filename}"`,
      "Cache-Control": "private, no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
