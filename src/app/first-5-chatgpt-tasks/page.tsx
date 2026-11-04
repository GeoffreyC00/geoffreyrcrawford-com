import type { Metadata } from "next";
import { ChatgptWorkbookPage } from "@/components/chatgpt-workbook/sales-page";
import { chatgptWorkbook } from "@/lib/products/chatgpt-workbook";

export const metadata: Metadata = {
  title: chatgptWorkbook.name,
  description:
    "A short PDF workbook for first-time ChatGPT users. Five everyday exercises. Finish one useful task in your first sitting. $19, one time.",
  alternates: { canonical: chatgptWorkbook.path },
  robots: { index: false, follow: false },
};

export default function FirstFiveChatgptTasksPage() {
  return <ChatgptWorkbookPage />;
}
