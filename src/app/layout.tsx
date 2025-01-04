import dynamic from "next/dynamic";
import "pretendard/dist/web/static/pretendard.css";
import { metadata } from "./metadata";
import ClientLayout from "@/shared/layouts/ClientLayout";
import { GlobalStyles } from "./GlobalStyles";

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
        <ClientLayout>
          <GlobalStyles />
          <MainLayout>{children}</MainLayout>
        </ClientLayout>
      </body>
    </html>
  );
}
