import { NavLink } from "@/shared/ui/nav-link";
import styled from "@emotion/styled";
import tw from "twin.macro";

const NavLinks = styled.div`
  ${tw`flex items-center ml-6`}
`;

interface NavigationProps {
  currentPath: string;
}

export const Navigation = ({ currentPath }: NavigationProps) => {
  return (
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
  );
};
