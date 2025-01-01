"use client";

import styled from "@emotion/styled";
import tw from "twin.macro";
import { FaDownload, FaPlus, FaPlay } from "react-icons/fa";

const StepsSection = styled.section`
  ${tw`py-24 bg-gray-50`}
`;

const StepsTitle = styled.h2`
  ${tw`text-center font-semibold mb-16 text-black`}
  font-size: 36px;
`;

const StepsGrid = styled.div`
  ${tw`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6`}
`;

const Step = styled.div`
  ${tw`flex flex-col items-center text-center`}
`;

const StepIcon = styled.div`
  ${tw`w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center text-xl mb-4`}
`;

const StepTitle = styled.h3`
  ${tw`text-lg font-semibold mb-2 text-black`}
`;

const StepDescription = styled.p`
  ${tw`text-gray-600`}
`;

const steps = [
  {
    icon: <FaDownload />,
    title: "프로그램 설치",
    description: "프로그램을 다운로드하고 설치합니다.",
  },
  {
    icon: <FaPlus />,
    title: "자막 파일 불러오기",
    description: "SRT 형식의 자막 파일을 프로그램으로 불러옵니다.",
  },
  {
    icon: <FaPlay />,
    title: "실행 및 동기화",
    description: "DAW를 실행하고 프로그램을 통해 자동으로 동기화합니다.",
  },
];

export const Steps = () => {
  return (
    <StepsSection>
      <StepsTitle>간단한 3단계로 시작하기</StepsTitle>
      <StepsGrid>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIcon>{step.icon}</StepIcon>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Step>
        ))}
      </StepsGrid>
    </StepsSection>
  );
};
