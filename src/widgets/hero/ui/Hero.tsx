"use client";

import styled from "@emotion/styled";
import tw from "twin.macro";
import { FaDiscord, FaDownload } from "react-icons/fa";
import { Button } from "@/shared/ui/button";

const HeroSection = styled.section`
  ${tw`flex items-center justify-between max-w-[1200px] mx-auto`}
  padding: 120px 24px 0;
  gap: 110px;
`;

const HeroText = styled.div`
  ${tw`flex flex-col flex-1`}
  max-width: 576px;
`;

const HeroTitle = styled.h1`
  ${tw`font-bold text-black whitespace-pre-line`}
  font-size: 60px;
  line-height: 1.2;
  margin-bottom: 20px;
`;

const HeroSubtitle = styled.p`
  ${tw`text-xl text-gray-600 mb-12`}
  line-height: 1.5;
`;

const HeroButtons = styled.div`
  ${tw`flex gap-4`}
`;

const HeroImage = styled.div`
  ${tw`flex-1 flex justify-end`}

  img {
    ${tw`w-full h-auto`}
    max-width: 640px;
  }
`;

export const Hero = () => {
  return (
    <HeroSection>
      <HeroText>
        <HeroTitle>{`자막 동기화를\n더 쉽고 빠르게`}</HeroTitle>
        <HeroSubtitle>
          Melody-Sync는 DAW의 오디오 신호와 자막을 실시간으로 동기화하여 OBS에
          출력하는 도구입니다.
        </HeroSubtitle>
        <HeroButtons>
          <Button
            variant="primary"
            href="https://github.com/abwarten/Melody-Sync-Release/releases/latest"
            target="_blank"
          >
            <FaDownload className="mr-2" />
            시작하기
          </Button>
          <Button
            variant="discord"
            href="https://discord.gg/vJBQAsBmDR"
            target="_blank"
          >
            <FaDiscord className="mr-2" />
            디스코드 참여
          </Button>
        </HeroButtons>
      </HeroText>
      <HeroImage>
        <img src="/image1.png" alt="Melody Sync Interface" />
      </HeroImage>
    </HeroSection>
  );
};
