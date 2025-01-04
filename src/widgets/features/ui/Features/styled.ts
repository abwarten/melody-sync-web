import styled from "@emotion/styled";
import tw from "twin.macro";

export const FeaturesSection = styled.section`
  ${tw`flex flex-col items-center py-12 md:py-24`}
`;

export const FeaturesTitle = styled.h2`
  ${tw`font-semibold text-center mb-6 md:mb-16 text-black px-4`}
  font-size: 24px;

  @media (min-width: 640px) and (max-width: 1023px) {
    font-size: 32px;
  }

  @media (min-width: 1024px) {
    font-size: 36px;
  }
`;

export const FeaturesGrid = styled.div`
  ${tw`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4 md:px-6`}
`;

export const FeatureCard = styled.div`
  ${tw`flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 md:gap-5 p-4 md:p-6 rounded-xl`}
`;

export const FeatureIcon = styled.div`
  ${tw`w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center text-xl flex-shrink-0`}
`;

export const FeatureContent = styled.div`
  ${tw`flex flex-col flex-1`}
`;

export const FeatureTitle = styled.h3`
  ${tw`text-base md:text-lg font-semibold text-black mb-2 md:mb-0`}
  line-height: 1;
`;

export const FeatureDescription = styled.p`
  ${tw`text-sm md:text-base text-gray-600 leading-relaxed mt-2`}
`;
