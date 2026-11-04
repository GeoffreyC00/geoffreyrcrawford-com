import type { Metadata } from "next";
import { ChatgptWorkbookPage } from "@/components/chatgpt-workbook/sales-page";
import { chatgptWorkbook } from "@/lib/products/chatgpt-workbook";

export const metadata: Metadata = {
  title: "ChatGPT, step by step",
  description:
    "Start with the basics. Learn how to open ChatGPT, ask your first question, and use it for five everyday tasks. Workbook: Your First 5 Things to Do With ChatGPT. $19, one time. Checkout is not open yet.",
  alternates: { canonical: chatgptWorkbook.path },
  robots: { index: false, follow: false },
};

export default function FirstFiveChatgptTasksPage() {
  return <ChatgptWorkbookPage />;
}
