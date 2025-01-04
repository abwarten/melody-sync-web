"use client";

import { GlobalStyles } from "./GlobalStyles";
import dynamic from "next/dynamic";
import "pretendard/dist/web/static/pretendard.css";
import { metadata } from "./metadata";

const MainLayout = dynamic(() => import("@/shared/layouts/MainLayout"), {
  loading: () => <div className="min-h-screen animate-pulse" />,
});

export { metadata };

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
