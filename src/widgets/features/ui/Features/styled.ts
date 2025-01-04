import styled from "@emotion/styled";
import tw from "twin.macro";

export const FeaturesSection = styled.section`
  ${tw`flex flex-col items-center py-24`}
`;

export const FeaturesTitle = styled.h2`
  ${tw`font-semibold text-center mb-16 text-black`}
  font-size: 36px;
`;

export const FeaturesGrid = styled.div`
  ${tw`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6`}
`;

export const FeatureCard = styled.div`
  ${tw`flex items-start gap-5 p-6 rounded-xl`}
`;

export const FeatureIcon = styled.div`
  ${tw`w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center text-xl flex-shrink-0`}
`;

export const FeatureContent = styled.div`
  ${tw`flex flex-col flex-1`}
  margin-top: -4px;
`;

export const FeatureTitle = styled.h3`
  ${tw`text-lg font-semibold text-black`}
  line-height: 1;
`;

export const FeatureDescription = styled.p`
  ${tw`text-gray-600 text-base leading-relaxed mt-2`}
`;