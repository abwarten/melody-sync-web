"use client";

import styled from "@emotion/styled";
import tw from "twin.macro";
import { Hero } from "@/widgets/hero";
import { Features } from "@/widgets/features";
import { Steps } from "@/widgets/steps";
import { CTA } from "@/widgets/cta";

const Container = styled.div`
  ${tw`min-h-screen bg-white`}
`;

export const HomePage = () => {
  return (
    <Container>
      <Hero />
      <Features />
      <Steps />
      <CTA />
    </Container>
  );
};
