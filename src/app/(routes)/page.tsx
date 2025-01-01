"use client";

import styled from "@emotion/styled";
import tw from "twin.macro";
import { TopBar } from "@/widgets/header";
import { Hero } from "@/widgets/hero";
import { Features } from "@/widgets/features";
import { Steps } from "@/widgets/steps";
import { CTA } from "@/widgets/cta";

const MainContainer = styled.div`
  ${tw`min-h-screen bg-white`}
`;

export default function HomePage() {
  return (
    <MainContainer>
      <TopBar currentPath="/" />
      <Hero />
      <Features />
      <Steps />
      <CTA />
    </MainContainer>
  );
}
