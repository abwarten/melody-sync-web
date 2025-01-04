"use client";

import styled from "@emotion/styled";
import tw from "twin.macro";
import { ReactNode } from "react";

interface ButtonProps {
  variant: "primary" | "secondary" | "download" | "discord";
  href?: string;
  target?: string;
  children: ReactNode;
  onClick?: () => void;
}

const BaseButton = styled.a<{ variant: ButtonProps["variant"] }>`
  ${tw`flex items-center justify-center rounded-lg text-lg font-semibold transition-colors duration-200`}
  text-decoration: none;
  height: 48px;
  padding: 0 24px;

  &:visited {
    ${({ variant }) => variant === "discord" && tw`text-white`}
  }

  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return tw`bg-black text-white hover:bg-[#333333]`;
      case "secondary":
        return tw`bg-[#e0e7ff] text-black hover:bg-[#c7d2fe]`;
      case "download":
        return tw`bg-white text-black hover:bg-[#f5f5f5]`;
      case "discord":
        return tw`bg-[#5865F2] text-white hover:bg-[#4752C4] hover:text-white`;
      default:
        return "";
    }
  }}

  svg {
    margin-right: 8px;
    font-size: 16px;
  }
`;

export const Button = ({
  variant,
  href,
  target,
  children,
  onClick,
}: ButtonProps) => {
  if (href) {
    return (
      <BaseButton as="a" href={href} target={target} variant={variant}>
        {children}
      </BaseButton>
    );
  }

  return (
    <BaseButton as="button" onClick={onClick} variant={variant}>
      {children}
    </BaseButton>
  );
};
