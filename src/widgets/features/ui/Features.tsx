"use client";

import styled from "@emotion/styled";
import tw from "twin.macro";
import { FaCog, FaPlus, FaSearch, FaTv, FaSync } from "react-icons/fa";

const FeaturesSection = styled.section`
  ${tw`flex flex-col items-center py-24`}
`;

const FeaturesTitle = styled.h2`
  ${tw`font-semibold text-center mb-16 text-black`}
  font-size: 36px;
`;

const FeaturesGrid = styled.div`
  ${tw`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6`}
`;

const FeatureCard = styled.div`
  ${tw`flex items-start gap-5 p-6 rounded-xl`}
`;

const FeatureIcon = styled.div`
  ${tw`w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center text-xl flex-shrink-0`}
`;

const FeatureContent = styled.div`
  ${tw`flex flex-col flex-1`}
  margin-top: -4px;
`;

const FeatureTitle = styled.h3`
  ${tw`text-lg font-semibold text-black`}
  line-height: 1;
`;

const FeatureDescription = styled.p`
  ${tw`text-gray-600 text-base leading-relaxed mt-2`}
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
    icon: <FaTv />,
    title: "OBS 출력",
    description: "동기화된 자막을 OBS에 출력하여 방송에서 활용할 수 있습니다.",
  },
  {
    icon: <FaSync />,
    title: "실시간 동기화",
    description: "DAW의 오디오 신호와 자막을 실시간으로 동기화합니다.",
  },
];

export const Features = () => {
  return (
    <FeaturesSection>
      <FeaturesTitle>강력한 기능을 간단하게</FeaturesTitle>
      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureCard key={index}>
            <FeatureIcon>{feature.icon}</FeatureIcon>
            <FeatureContent>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureContent>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </FeaturesSection>
  );
};
