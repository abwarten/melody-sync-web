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
  ${tw`flex items-center justify-center rounded-lg transition-colors duration-200`}
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 16px;
  width: auto;

  @media (min-width: 640px) and (max-width: 1023px) {
    font-size: 12px;
    padding: 8px 12px;
    height: 40px;

    svg {
      width: 12px !important;
      height: 12px !important;
      margin-right: 6px !important;
    }
  }

  @media (min-width: 1024px) {
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 600;
    height: 48px;
    padding: 0 24px;

    svg {
      width: 16px;
      height: 16px;
      margin-right: 8px;
    }
  }

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
    width: 14px;
    height: 14px;
    margin-right: 6px;
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
