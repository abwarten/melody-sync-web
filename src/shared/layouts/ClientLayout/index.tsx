"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
  const pathname = usePathname();

  useEffect(() => {
    // 페이지 변경 시 스크롤을 맨 위로
    window.scrollTo(0, 0);
  }, [pathname]);

  return <div>{children}</div>;
};

export default ClientLayout;
