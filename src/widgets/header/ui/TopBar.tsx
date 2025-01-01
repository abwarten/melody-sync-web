"use client";

import styled from "@emotion/styled";
import tw from "twin.macro";
import { FaDownload } from "react-icons/fa";
import { NavLink } from "@/shared/ui/nav-link";

const TopBarContainer = styled.div`
  ${tw`w-full bg-white flex items-center fixed top-0 left-0 right-0`}
  padding-left: 32px;
  height: 64px;
  z-index: 10;
  border-bottom: 1px solid #e5e7eb;
`;

const LeftSection = styled.div`
  ${tw`flex items-center`}
`;

const TopBarTitle = styled.h1`
  ${tw`text-xl font-bold text-black`}
`;

const NavLinks = styled.div`
  ${tw`flex items-center ml-6`}
`;

const RightNav = styled.div`
  ${tw`flex items-center`}
  margin-left: auto;
  padding-right: 64px;
`;

interface TopBarProps {
  currentPath: string;
}

export const TopBar = ({ currentPath }: TopBarProps) => {
  return (
    <TopBarContainer>
      <LeftSection>
        <TopBarTitle>Melody-sync</TopBarTitle>
        <NavLinks>
          <NavLink href="/" isActive={currentPath === "/"}>
            홈
          </NavLink>
          <NavLink href="/how-to-use" isActive={currentPath === "/how-to-use"}>
            사용방법
          </NavLink>
          <NavLink href="/contact" isActive={currentPath === "/contact"}>
            연락처
          </NavLink>
        </NavLinks>
      </LeftSection>
      <RightNav>
        <NavLink
          href="https://github.com/abwarten/Melody-Sync-Release/releases/latest"
          variant="download"
        >
          <FaDownload className="mr-2" />
          다운로드
        </NavLink>
      </RightNav>
    </TopBarContainer>
  );
};
