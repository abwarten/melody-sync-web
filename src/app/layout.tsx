"use client";

import { GlobalStyles } from "./GlobalStyles";
import { Metadata } from "next";
import { MainLayout } from "@/shared/layouts/MainLayout";

export const metadata: Metadata = {
  title: "MelodySync",
  description: "DAW와 자막을 쉽게 동기화하세요",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <GlobalStyles />
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
