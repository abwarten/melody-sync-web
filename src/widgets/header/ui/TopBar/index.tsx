"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { TopBarContainer, LeftSection, RightNav } from "./styled";
import { Navigation } from "../Navigation";
import { Logo } from "../Logo";

const DownloadButton = dynamic(() => import("../DownloadButton"), {
  loading: () => (
    <div className="w-32 h-10 animate-pulse bg-gray-100 rounded" />
  ),
});

const TopBar = ({ currentPath }: { currentPath: string }) => {
  return (
    <TopBarContainer>
      <LeftSection>
        <Logo />
        <Navigation currentPath={currentPath} />
      </LeftSection>
      <RightNav>
        <DownloadButton />
      </RightNav>
    </TopBarContainer>
  );
};

export default TopBar;
