import styled from "@emotion/styled";
import tw from "twin.macro";

export const HeroSection = styled.section`
  ${tw`flex items-center justify-between max-w-[1200px] mx-auto`}
  padding: 120px 24px 0;
  gap: 110px;
`;

export const HeroText = styled.div`
  ${tw`flex flex-col flex-1`}
  max-width: 576px;
`;

export const HeroTitle = styled.h1`
  ${tw`font-bold text-black whitespace-pre-line`}
  font-size: 60px;
  line-height: 1.2;
  margin-bottom: 20px;
`;

export const HeroSubtitle = styled.p`
  ${tw`text-xl text-gray-600 mb-12`}
  line-height: 1.5;
`;

export const HeroButtons = styled.div`
  ${tw`flex gap-4`}
`;

export const HeroImage = styled.div`
  ${tw`flex-1 flex justify-end`}

  img {
    ${tw`w-full h-auto`}
    max-width: 640px;
  }
`;
