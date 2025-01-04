"use client";

import { FaDiscord, FaDownload } from "react-icons/fa";
import { Button } from "@/shared/ui/button";
import {
  HeroSection,
  HeroText,
  HeroTitle,
  HeroSubtitle,
  HeroButtons,
  HeroImage,
} from "./styled";
import type { HeroProps } from "../../model/types";

const defaultProps: HeroProps = {
  title: "자막 동기화를\n더 쉽고 빠르게",
  subtitle:
    "Melody-Sync는 DAW의 오디오 신호와 자막을 실시간으로\n동기화하여 OBS에 출력하는 도구입니다.",
  downloadUrl:
    "https://github.com/abwarten/Melody-Sync-Release/releases/download/v0.0.3-beta/MelodySync-Setup-0.0.3-beta.exe",
  discordUrl: "https://discord.gg/vJBQAsBmDR",
};

export const Hero = (props: Partial<HeroProps> = {}) => {
  const { title, subtitle, downloadUrl, discordUrl } = {
    ...defaultProps,
    ...props,
  };

  return (
    <HeroSection>
      <HeroText>
        <HeroTitle>{title}</HeroTitle>
        <HeroSubtitle>{subtitle}</HeroSubtitle>
        <HeroButtons>
          <Button variant="primary" href={downloadUrl} target="_blank">
            <FaDownload className="mr-2" />
            시작하기
          </Button>
          <Button variant="discord" href={discordUrl} target="_blank">
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
