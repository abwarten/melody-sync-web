"use client";

import { TopBarContainer, LeftSection, RightNav } from "./styled";
import { Navigation } from "../Navigation";
import { Logo } from "../Logo";
import { DownloadButton } from "../DownloadButton";
import type { TopBarProps } from "../../model/types";

export const TopBar = ({ currentPath }: TopBarProps) => {
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
