"use client";

import { DAWInterface } from "@/widgets/daw-interface/ui/DAWInterface";
import styled from "@emotion/styled";
import tw from "twin.macro";
import {
  FaDownload,
  FaDiscord,
  FaCog,
  FaPlus,
  FaSearch,
  FaTv,
  FaVideo,
  FaSync,
  FaPlay,
} from "react-icons/fa";
import { Button } from "@/shared/ui/Button/Button";

const MainContainer = styled.div`
  ${tw`min-h-screen bg-white`}
`;

const TopBar = styled.div`
  ${tw`w-full bg-white flex items-center fixed top-0 left-0 right-0`}
  padding-left: 32px;
  padding-right: 0;
  padding-top: 0;
  padding-bottom: 0;
  height: 64px;
  z-index: 10;
  border-bottom: 1px solid #e5e7eb;
`;

const LeftSection = styled.div`
  ${tw`flex items-center`}
`;

const TopBarTitle = styled.h1`
  ${tw`text-xl font-bold text-black`}
`;

const NavLinks = styled.div`
  ${tw`flex items-center ml-6`}
`;

const NavLink = styled.a<{ isActive?: boolean }>`
  ${tw`text-black hover:text-gray-600 cursor-pointer relative`}
  margin-left: 1rem;
  display: flex;
  align-items: center;

  ${({ isActive }) =>
    isActive &&
    `
    &::after {
      content: '';
      position: absolute;
      bottom: -24px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #000000;
    }
  `}
`;

const DownloadButton = styled(NavLink)`
  background-color: #000000;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #333333;
    color: white;
  }

  &::after {
    display: none;
  }

  svg {
    margin-right: 8px;
  }
`;

const RightNav = styled.div`
  ${tw`flex items-center`}
  margin-left: auto;
  padding-right: 64px;
`;

const HeroSection = styled.section`
  ${tw`flex items-center justify-between mx-auto`}
  padding: 80px 112px 0;
  gap: 110px;
`;

const HeroText = styled.div`
  ${tw`flex flex-col`}
  max-width: 576px;
`;

const HeroTitle = styled.h1`
  ${tw`font-bold text-black whitespace-pre-line`}
  font-size: 60px;
  margin-bottom: 20px;
`;

const HeroSubtitle = styled.p`
  ${tw`text-gray-600`}
  font-size: 20px;
  margin-top: 0;
  margin-bottom: 32px;
`;

const HeroImage = styled.img`
  ${tw`rounded-lg overflow-hidden shadow-xl`}
  width: 720px;
  height: 530px;
  padding-right: 0;
`;

const FeaturesSection = styled.section`
  ${tw`flex flex-col items-center py-24`}
`;

const FeaturesTitle = styled.h2`
  ${tw`font-semibold text-center mb-16 text-black`}
  font-size: 36px;
`;

const FeaturesGrid = styled.div`
  ${tw`grid grid-cols-3 gap-4 mx-auto`}
`;

const FeatureCard = styled.div`
  ${tw`flex items-start gap-3 p-4 rounded-xl`}
  width: 384px;
  height: 80px;
`;

const FeatureIcon = styled.div`
  ${tw`flex items-center justify-center bg-black text-white rounded-lg flex-shrink-0`}
  width: 32px;
  height: 32px;
  font-size: 14px;
  margin-top: 2px;
`;

const FeatureContent = styled.div`
  ${tw`flex flex-col`}
  gap: 8px;
  margin: 0;
`;

const FeatureTitle = styled.h3`
  ${tw`font-bold text-black`}
  margin: 0;
  font-size: 18px;
`;

const FeatureDescription = styled.p`
  ${tw`text-gray-600`}
  margin: 0;
  line-height: 1.5;
  font-size: 16px;
`;

const StepsSection = styled.section`
  ${tw`py-24`}
  margin: 0;
  background-color: #f9fafb;
`;

const StepsTitle = styled.h2`
  ${tw`font-semibold text-center text-black`}
  font-size: 36px;
  margin: 0 0 64px 0;
`;

const StepsGrid = styled.div`
  ${tw`grid grid-cols-3 gap-8 max-w-[1000px] mx-auto`}
`;

const Step = styled.div`
  ${tw`flex flex-col items-center text-center`}
  max-width: 280px;
`;

const StepIcon = styled.div`
  ${tw`flex items-center justify-center bg-black rounded-2xl mb-6`}
  width: 64px;
  height: 64px;

  svg {
    ${tw`text-white`}
    font-size: 24px;
  }
`;

const StepTitle = styled.h3`
  ${tw`text-lg font-semibold text-black mb-3`}
`;

const StepDescription = styled.p`
  ${tw`text-base text-gray-600`}
  line-height: 1.5;
`;

const BottomSection = styled.section`
  ${tw`bg-white text-white`}
  height: 480px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  overflow: hidden;
`;

const BottomInner = styled.div`
  width: 1216px;
  height: 346px;
  border-radius: 8px;

  margin: 62px 112px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.001), rgba(0, 0, 0, 0.001)),
    #000000;
  box-shadow: 0px 8px 10px -6px rgba(0, 0, 0, 0.1),
    0px 20px 25px -5px rgba(0, 0, 0, 0.1);
  z-index: 0;
`;

const BottomLeft = styled.div`
  ${tw`flex flex-col`}
  padding-left: 64px;
  gap: 24px;
  max-width: 576px;
`;

const BottomTitle = styled.h2`
  ${tw`font-bold`}
  font-size: 48px;
  line-height: 1.2;
  margin: 0;
`;

const BottomDescription = styled.p`
  ${tw`text-gray-400`}
  font-size: 18px;
  line-height: 1.5;
  margin: 0;
`;

const BottomButtons = styled.div`
  ${tw`flex gap-3`}
`;

const BottomRight = styled.div`
  height: 100%;
  flex: 1;
  position: relative;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.8), transparent);

  img {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: auto;
    object-fit: cover;
  }
`;

const HeroButtons = styled.div`
  ${tw`flex gap-4`}
`;

const PrimaryButton = styled.button`
  ${tw`flex items-center justify-center rounded-lg bg-black text-white text-lg font-semibold w-[148px] h-[62px] border-none transition-colors duration-200 hover:bg-[#333333]`}
`;

const SecondaryButton = styled.button`
  ${tw`flex items-center justify-center rounded-lg bg-[#e0e7ff] text-lg font-semibold w-[216px] h-[62px] border-none transition-colors duration-200 hover:bg-[#c7d2fe]`}

  svg {
    margin-right: 8px;
  }
`;

const BottomDownloadButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  gap: 8px;

  height: 50px;
  border-radius: 4px;

  background: #ffffff;
  color: #000000;
  font-size: 16px;
  font-weight: 500;

  border: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f5f5f5;
  }

  svg {
    font-size: 16px;
  }
`;

const BottomDiscordButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  gap: 8px;

  height: 50px;
  border-radius: 4px;

  background: #4f46e5;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;

  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0);
  z-index: 1;

  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #4338ca;
  }

  svg {
    font-size: 16px;
  }
`;

const features = [
  {
    icon: <FaCog />,
    title: "설정 기능",
    description:
      "프로그램의 다양한 설정을 사용자 환경에 맞게 커스터마이징할 수 있습니다.",
  },
  {
    icon: <FaPlus />,
    title: "자막 추가",
    description: "새로운 노래와 자막을 손쉽게 추가하고 관리할 수 있습니다.",
  },
  {
    icon: <FaSearch />,
    title: "검색 기능",
    description: "등록된 노래와 자막을 빠르고 효율적으로 검색할 수 있습니다.",
  },
  {
    icon: <FaVideo />,
    title: "OBS 출력",
    description:
      "동기화된 자막을 OBS로 원활하게 출력하여 방송에서 활용할 수 있습니다.",
  },
  {
    icon: <FaSync />,
    title: "DAW 신호 연동",
    description:
      "DAW의 오디오 신호를 실시간으로 감지하여 SRT 자막과 자동으로 연동합니다.",
  },
];

export default function Page() {
  return (
    <MainContainer>
      <TopBar>
        <LeftSection>
          <TopBarTitle>Melody-sync</TopBarTitle>
          <NavLinks>
            <NavLink isActive={true}>홈</NavLink>
            <NavLink>사용방법</NavLink>
          </NavLinks>
        </LeftSection>
        <RightNav>
          <DownloadButton>
            <FaDownload className="mr-2" />
            다운로드
          </DownloadButton>
        </RightNav>
      </TopBar>
      <HeroSection>
        <HeroText>
          <HeroTitle>{"DAW 자막\n싱크로나이저(Beta)"}</HeroTitle>
          <HeroSubtitle>
            DAW의 오디오 신호와 자막을 실시간으로 동기화하여 OBS에 출력하는
            도구입니다.
          </HeroSubtitle>
          <HeroButtons>
            <PrimaryButton>시작하기</PrimaryButton>
            <SecondaryButton>
              <FaDiscord />
              디스코드 참여
            </SecondaryButton>
          </HeroButtons>
        </HeroText>
        <HeroImage src="/image1.png" alt="DAW 인터페이스 이미지" />
      </HeroSection>
      <FeaturesSection>
        <FeaturesTitle>강력한 기능을 간단하게</FeaturesTitle>
        <FeaturesGrid>
          <FeatureCard>
            <FeatureIcon>
              <FaCog />
            </FeatureIcon>
            <FeatureContent>
              <FeatureTitle>설정 기능</FeatureTitle>
              <FeatureDescription>
                프로그램의 다양한 설정을 사용할 수 있습니다.
              </FeatureDescription>
            </FeatureContent>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>
              <FaPlus />
            </FeatureIcon>
            <FeatureContent>
              <FeatureTitle>자막 추가</FeatureTitle>
              <FeatureDescription>
                새로운 노래와 자막을 손쉽게 추가할 수 있습니다.
              </FeatureDescription>
            </FeatureContent>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>
              <FaSearch />
            </FeatureIcon>
            <FeatureContent>
              <FeatureTitle>검색 기능</FeatureTitle>
              <FeatureDescription>
                등록된 노래와 자막을 검색하고 효율적으로 관리할 수 있습니다.
              </FeatureDescription>
            </FeatureContent>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>
              <FaTv />
            </FeatureIcon>
            <FeatureContent>
              <FeatureTitle>OBS 출력</FeatureTitle>
              <FeatureDescription>
                동기화된 자막을 OBS에 출력하여 방송에서 활용할 수 있습니다.
              </FeatureDescription>
            </FeatureContent>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>
              <FaSync />
            </FeatureIcon>
            <FeatureContent>
              <FeatureTitle>실시간 동기화</FeatureTitle>
              <FeatureDescription>
                DAW의 오디오 신호와 자막을 실시간으로 동기화합니다.
              </FeatureDescription>
            </FeatureContent>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>
      <StepsSection>
        <StepsTitle>간단한 3단계로 시작하기</StepsTitle>
        <StepsGrid>
          <Step>
            <StepIcon>
              <FaDownload />
            </StepIcon>
            <StepTitle>프로그램 설치</StepTitle>
            <StepDescription>
              프로그램을 다운로드하고 설치합니다.
            </StepDescription>
          </Step>
          <Step>
            <StepIcon>
              <FaPlus />
            </StepIcon>
            <StepTitle>자막 파일 불러오기</StepTitle>
            <StepDescription>
              SRT 형식의 자막 파일을 프로그램으로 불러옵니다.
            </StepDescription>
          </Step>
          <Step>
            <StepIcon>
              <FaPlay />
            </StepIcon>
            <StepTitle>실행 및 동기화</StepTitle>
            <StepDescription>
              DAW를 실행하고 프로그램을 통해 자동으로 동기화합니다.
            </StepDescription>
          </Step>
        </StepsGrid>
      </StepsSection>
      <BottomSection>
        <BottomInner>
          <BottomLeft>
            <BottomTitle>지금 바로 시작하세요</BottomTitle>
            <BottomDescription>
              Melody-sync로 당신의 작업을 더욱 효율적으로 만들어보세요.
            </BottomDescription>
            <BottomButtons>
              <BottomDownloadButton>
                <FaDownload />
                다운로드
              </BottomDownloadButton>
              <BottomDiscordButton>
                <FaDiscord />
                디스코드 참여
              </BottomDiscordButton>
            </BottomButtons>
          </BottomLeft>
          <BottomRight>
            <img src="./IMG@1x.png" alt="DAW Interface" />
          </BottomRight>
        </BottomInner>
      </BottomSection>
    </MainContainer>
  );
}
