"use client";

import { Container, Content } from "./styled";
import { MarkdownContent } from "@/shared/ui/markdown";
import type { HowToUsePageProps } from "../../model/types";

export const HowToUsePage = ({ content }: HowToUsePageProps) => {
  return (
    <Container>
      <Content>
        <MarkdownContent>{content}</MarkdownContent>
      </Content>
    </Container>
  );
};