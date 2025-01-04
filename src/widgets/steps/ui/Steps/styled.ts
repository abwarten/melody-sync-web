import styled from "@emotion/styled";
import tw from "twin.macro";

export const StepsSection = styled.section`
  ${tw`py-12 md:py-24 bg-gray-50`}
`;

export const StepsTitle = styled.h2`
  ${tw`text-center font-semibold mb-6 md:mb-16 text-black px-4`}
  font-size: 24px;

  @media (min-width: 768px) {
    font-size: 36px;
  }
`;

export const StepsGrid = styled.div`
  ${tw`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4 md:px-6`}
`;

export const Step = styled.div`
  ${tw`flex flex-col items-center text-center p-4`}
`;

export const StepIcon = styled.div`
  ${tw`w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center text-xl mb-4`}
`;

export const StepTitle = styled.h3`
  ${tw`text-base md:text-lg font-semibold mb-2 text-black`}
`;

export const StepDescription = styled.p`
  ${tw`text-sm md:text-base text-gray-600 leading-relaxed`}
`;
