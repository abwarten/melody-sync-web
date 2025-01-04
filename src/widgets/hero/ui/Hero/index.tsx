"use client";

import { FaDiscord, FaDownload } from "react-icons/fa";
import { Button } from "@/shared/ui/button";
import Image from "next/image";
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
  subtitle1: "Melody-Sync는 DAW의 오디오 신호와 자막을",
  subtitle2: "실시간으로 동기화하여 OBS에 출력하는 도구입니다.",
  downloadUrl:
    "https://github.com/abwarten/Melody-Sync-Release/releases/download/v0.0.3-beta/MelodySync-Setup-0.0.3-beta.exe",
  discordUrl: "https://discord.gg/vJBQAsBmDR",
};

const Hero = (props: Partial<HeroProps> = {}) => {
  const { title, subtitle1, subtitle2, downloadUrl, discordUrl } = {
    ...defaultProps,
    ...props,
  };

  return (
    <HeroSection>
      <HeroText>
        <HeroTitle>{title}</HeroTitle>
        <HeroSubtitle>{subtitle1}</HeroSubtitle>
        <HeroSubtitle>{subtitle2}</HeroSubtitle>
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
        <Image
          src="/image1.png"
          alt="Melody Sync Interface"
          width={640}
          height={480}
          priority
          quality={75}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
        />
      </HeroImage>
    </HeroSection>
  );
};

export default Hero;
