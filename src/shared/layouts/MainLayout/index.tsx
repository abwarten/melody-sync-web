"use client";

import { usePathname } from "next/navigation";
import { TopBar } from "@/widgets/header";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const pathname = usePathname() || "/";

  return (
    <>
      <TopBar currentPath={pathname} />
      {children}
    </>
  );
};
