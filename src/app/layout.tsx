import { Metadata } from "next";
import { ClientLayoutWrapper } from "@/components/ClientLayoutWrapper";

export const metadata: Metadata = {
  title: "DAW 자막 싱크로나이저",
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
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
