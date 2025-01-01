"use client";

import styled from "@emotion/styled";
import tw from "twin.macro";
import { DAWHeader } from "@/features/daw-header/ui/DAWHeader";
import { Button } from "@/shared/ui";
import { FaDownload, FaDiscord } from "react-icons/fa";

const Container = styled.div`
  ${tw`flex flex-col min-h-screen bg-white`}
`;

const MainContent = styled.main`
  ${tw`flex-1 max-w-[1200px] mx-auto w-full px-8`}
`;

const FeaturesTitle = styled.h2`
  ${tw`text-2xl font-semibold text-center mt-24 mb-16`}
`;

const FeaturesGrid = styled.div`
  ${tw`grid grid-cols-2 gap-8 max-w-[1000px] mx-auto`}
`;

const FeatureCard = styled.div`
  ${tw`flex items-start gap-5 p-6 bg-gray-50 rounded-xl`}
`;

const FeatureIcon = styled.div`
  ${tw`w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center text-xl`}
`;

const FeatureContent = styled.div`
  ${tw`flex flex-col`}
`;

const FeatureTitle = styled.h3`
  ${tw`text-base font-semibold mb-1`}
`;

const FeatureDescription = styled.p`
  ${tw`text-sm text-gray-600`}
`;

const StepsSection = styled.section`
  ${tw`flex justify-between mt-32 mb-24 max-w-[1000px] mx-auto`}
`;

const Step = styled.div`
  ${tw`flex flex-col items-center text-center`}
`;

const StepNumber = styled.div`
  ${tw`text-xl font-bold mb-4`}
`;

const StepTitle = styled.h3`
  ${tw`text-lg font-semibold mb-2`}
`;

const StepDescription = styled.p`
  ${tw`text-sm text-gray-600`}
`;

const BottomSection = styled.section`
  ${tw`bg-black text-white rounded-2xl overflow-hidden`}
`;

const BottomContent = styled.div`
  ${tw`flex justify-between items-center p-12`}
`;

const BottomLeft = styled.div`
  ${tw`flex flex-col gap-4`}
`;

const BottomTitle = styled.h2`
  ${tw`text-2xl font-semibold`}
`;

const BottomDescription = styled.p`
  ${tw`text-gray-400`}
`;

const BottomButtons = styled.div`
  ${tw`flex gap-4`}
`;

export const DAWInterface = () => {
  return (
    <Container>
      <DAWHeader />
      <MainContent>
        <FeaturesTitle>강력한 기능을 간단하게</FeaturesTitle>
        <FeaturesGrid>
          <FeatureCard>
            <FeatureIcon>⚙️</FeatureIcon>
            <FeatureContent>
              <FeatureTitle>설정 기능</FeatureTitle>
              <FeatureDescription>
                프로그램의 다양한 설정을 사용할 수 있습니다.
              </FeatureDescription>
            </FeatureContent>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>➕</FeatureIcon>
            <FeatureContent>
              <FeatureTitle>자막 추가</FeatureTitle>
              <FeatureDescription>
                새로운 노래와 자막을 손쉽게 추가할 수 있습니다.
              </FeatureDescription>
            </FeatureContent>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>🔍</FeatureIcon>
            <FeatureContent>
              <FeatureTitle>검색 기능</FeatureTitle>
              <FeatureDescription>
                등록된 노래와 자막을 검색하고 효율적으로 관리할 수 있습니다.
              </FeatureDescription>
            </FeatureContent>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>📺</FeatureIcon>
            <FeatureContent>
              <FeatureTitle>OBS 출력</FeatureTitle>
              <FeatureDescription>
                동기화된 자막을 OBS에 출력하여 방송에서 활용할 수 있습니다.
              </FeatureDescription>
            </FeatureContent>
          </FeatureCard>
        </FeaturesGrid>

        <StepsSection>
          <Step>
            <StepNumber>1.</StepNumber>
            <StepTitle>프로그램 설치</StepTitle>
            <StepDescription>
              프로그램을 다운로드하고 설치합니다.
            </StepDescription>
          </Step>
          <Step>
            <StepNumber>2.</StepNumber>
            <StepTitle>자막 파일 불러오기</StepTitle>
            <StepDescription>
              SRT 형식의 자막 파일을 프로그램으로 불러옵니다.
            </StepDescription>
          </Step>
          <Step>
            <StepNumber>3.</StepNumber>
            <StepTitle>실행 및 동기화</StepTitle>
            <StepDescription>
              DAW를 실행하고 프로그램을 통해 자동으로 동기화합니다.
            </StepDescription>
          </Step>
        </StepsSection>

        <BottomSection>
          <BottomContent>
            <BottomLeft>
              <BottomTitle>지금 바로 시작하세요</BottomTitle>
              <BottomDescription>
                Melody-sync로 당신의 작업을 더욱 효율적으로 만들어보세요.
              </BottomDescription>
              <BottomButtons>
                <Button variant="primary">
                  <FaDownload className="mr-2" />
                  다운로드
                </Button>
                <Button variant="secondary">
                  <FaDiscord className="mr-2" />
                  디스코드 참여
                </Button>
              </BottomButtons>
            </BottomLeft>
          </BottomContent>
        </BottomSection>
      </MainContent>
    </Container>
  );
};
