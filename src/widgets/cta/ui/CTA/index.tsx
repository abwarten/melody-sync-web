"use client";

import { FaDownload, FaDiscord } from "react-icons/fa";
import { Button } from "@/shared/ui/button";
import Image from "next/image";
import {
  BottomSection,
  BottomInner,
  BottomLeft,
  BottomTitle,
  BottomDescription,
  BottomButtons,
  BottomRight,
} from "./styled";
import { CTACONTENT } from "../../model/constants";

const CTA = () => {
  const { title, description, downloadUrl, discordUrl } = CTACONTENT;

  return (
    <BottomSection>
      <BottomInner>
        <BottomLeft>
          <BottomTitle>{title}</BottomTitle>
          <BottomDescription>{description}</BottomDescription>
          <BottomButtons>
            <Button variant="download" href={downloadUrl} target="_blank">
              <FaDownload />
              다운로드
            </Button>
            <Button variant="discord" href={discordUrl} target="_blank">
              <FaDiscord />
              디스코드 참여
            </Button>
          </BottomButtons>
        </BottomLeft>
        <BottomRight>
          <Image
            src="/IMG@1x.png"
            alt="DAW Interface"
            width={640}
            height={340}
            priority
            quality={75}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
          />
        </BottomRight>
      </BottomInner>
    </BottomSection>
  );
};

export default CTA;
