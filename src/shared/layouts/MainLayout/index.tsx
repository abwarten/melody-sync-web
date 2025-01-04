"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const TopBar = dynamic(() => import("@/widgets/header"), {
  loading: () => <div className="h-16 bg-white shadow-sm animate-pulse" />,
});

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const pathname = usePathname() || "/";

  return (
    <>
      <TopBar currentPath={pathname} />
      {children}
    </>
  );
};

export default MainLayout;
