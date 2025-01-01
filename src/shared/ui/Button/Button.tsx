"use client";

import styled from "@emotion/styled";

interface ButtonProps {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

const StyledButton = styled.button<{ variant: "primary" | "secondary" }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 0.375rem;
  transition: all 0.2s;

  ${({ variant }) =>
    variant === "primary"
      ? `
        background-color: #000;
        color: #fff;
        &:hover {
          background-color: #111;
        }
      `
      : `
        background-color: rgba(255, 255, 255, 0.1);
        color: #fff;
        &:hover {
          background-color: rgba(255, 255, 255, 0.15);
        }
      `}
`;

export const Button = ({ variant, children }: ButtonProps) => {
  return <StyledButton variant={variant}>{children}</StyledButton>;
};
