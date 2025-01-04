import styled from "@emotion/styled";
import tw from "twin.macro";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  isActive?: boolean;
  variant?: "default" | "download";
  children: ReactNode;
  target?: string;
}

const BaseNavLink = styled.a<{
  isActive?: boolean;
  variant?: "default" | "download";
}>`
  ${tw`text-sm md:text-base text-black hover:text-gray-600 cursor-pointer relative`}
  margin-left: 1rem;
  display: flex;
  align-items: center;
  text-decoration: none;

  ${({ isActive }) =>
    isActive &&
    `
    &::after {
      content: '';
      position: absolute;
      bottom: -24px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #000000;
    }
  `}

  ${({ variant }) =>
    variant === "download" &&
    `
    background-color: #000000;
    color: white;
    padding: 8px 16px;
    border-radius: 6px;
    transition: background-color 0.2s;
    font-size: 14px;

    @media (min-width: 768px) {
      font-size: 16px;
    }

    &:hover {
      background-color: #333333;
      color: white;
    }

    &::after {
      display: none;
    }

    svg {
      margin-right: 8px;
    }
  `}
`;

export const NavLink = ({
  href,
  isActive,
  variant = "default",
  children,
  target,
}: NavLinkProps) => {
  return (
    <BaseNavLink
      href={href}
      isActive={isActive}
      variant={variant}
      target={target}
    >
      {children}
    </BaseNavLink>
  );
};
