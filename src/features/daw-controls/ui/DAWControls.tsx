"use client";

import { FaCog, FaPlus, FaSearch, FaVideo } from "react-icons/fa";
import styled from "@emotion/styled";
import tw from "twin.macro";

const SectionTitle = styled.h2`
  ${tw`text-2xl font-semibold text-center mt-24 mb-16 text-black`}
`;

const FeatureGrid = styled.div`
  ${tw`grid grid-cols-2 gap-8 max-w-[1000px] mx-auto`}
`;

const FeatureCard = styled.div`
  ${tw`flex items-start gap-5 p-6 bg-gray-50 rounded-xl`}
`;

const FeatureIcon = styled.div`
  ${tw`flex items-center justify-center w-9 h-9 bg-black text-white rounded-lg flex-shrink-0`}
`;

const FeatureContent = styled.div`
  ${tw`flex flex-col gap-1.5`}
`;

const FeatureTitle = styled.h3`
  ${tw`text-base font-semibold text-black`}
`;

const FeatureDescription = styled.p`
  ${tw`text-sm text-gray-600 leading-relaxed`}
`;

const features = [
  {
    icon: <FaCog />,
    title: "설정 기능",
    description: "프로그램의 다양한 설정을 사용할 수 있습니다.",
  },
  {
    icon: <FaPlus />,
    title: "자막 추가",
    description: "새로운 노래와 자막을 손쉽게 추가할 수 있습니다.",
  },
  {
    icon: <FaSearch />,
    title: "검색 기능",
    description: "등록된 노래와 자막을 검색하고 효율적으로 관리할 수 있습니다.",
  },
  {
    icon: <FaVideo />,
    title: "OBS 출력",
    description: "동기화된 자막을 OBS에 출력하여 방송에서 활용할 수 있습니다.",
  },
];

export const DAWControls = () => {
  return (
    <section>
      <SectionTitle>강력한 기능을 간단하게</SectionTitle>
      <FeatureGrid>
        {features.map((feature, index) => (
          <FeatureCard key={index}>
            <FeatureIcon>{feature.icon}</FeatureIcon>
            <FeatureContent>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureContent>
          </FeatureCard>
        ))}
      </FeatureGrid>
    </section>
  );
};
