import styled from "@emotion/styled";
import tw from "twin.macro";

export const HeroSection = styled.section`
  ${tw`flex flex-col md:flex-row items-center justify-between max-w-[1200px] mx-auto px-4 md:px-6 pt-20 sm:pt-24 md:pt-28 md:gap-28`}
`;

export const HeroText = styled.div`
  ${tw`flex flex-col items-center md:items-start w-full md:w-1/2`}
`;

export const HeroTitle = styled.h1`
  ${tw`font-bold text-black whitespace-pre-line text-center md:text-left w-full`}
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 12px;

  @media (min-width: 640px) and (max-width: 1023px) {
    font-size: 2.8rem;
    margin-bottom: 16px;
  }

  @media (min-width: 1024px) {
    font-size: 60px;
    margin-bottom: 20px;
  }
`;

export const HeroSubtitle = styled.p`
  ${tw`text-gray-600 whitespace-pre-line`}
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 3rem;

  &:first-of-type {
    margin-bottom: 0;
  }

  &:last-of-type {
    margin-bottom: 3rem;
  }

  @media (min-width: 640px) and (max-width: 1023px) {
    font-size: 1rem;
    line-height: 1.5;
  }

  @media (min-width: 1024px) {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`;

export const HeroButtons = styled.div`
  ${tw`flex flex-col sm:flex-row gap-4 w-full sm:w-auto`}
  max-width: 280px;

  @media (min-width: 640px) and (max-width: 767px) {
    max-width: 220px;
    gap: 0.75rem;
  }

  @media (min-width: 768px) {
    max-width: none;
  }

  > * {
    ${tw`w-full sm:w-auto`}

    @media (min-width: 640px) and (max-width: 767px) {
      font-size: 14px !important;
      padding: 0.5rem 1rem !important;

      svg {
        width: 0.875rem !important;
        height: 0.875rem !important;
      }
    }
  }
`;

export const HeroImage = styled.div`
  ${tw`w-full md:w-1/2 flex justify-center md:justify-end mt-12 sm:mt-8 md:mt-0`}

  img {
    ${tw`w-full h-auto`}
    max-width: 400px;

    @media (min-width: 640px) {
      max-width: 480px;
    }

    @media (min-width: 768px) {
      max-width: 640px;
    }
  }
`;
