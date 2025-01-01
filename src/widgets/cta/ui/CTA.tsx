"use client";

import styled from "@emotion/styled";
import tw from "twin.macro";
import { FaDownload, FaDiscord } from "react-icons/fa";
import { Button } from "@/shared/ui/button";

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

const BottomDownloadButton = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  gap: 8px;
  border-radius: 4px;
  text-decoration: none;
  background: #ffffff;
  color: #000000;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f5f5f5;
  }

  svg {
    font-size: 16px;
  }
`;

const BottomDiscordButton = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  gap: 8px;
  border-radius: 4px;
  text-decoration: none;
  color: #ffffff;
  background: #4f46e5;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #4338ca;
    color: #ffffff;
  }

  svg {
    font-size: 16px;
  }
`;

export const CTA = () => {
  return (
    <BottomSection>
      <BottomInner>
        <BottomLeft>
          <BottomTitle>지금 바로 시작하세요</BottomTitle>
          <BottomDescription>
            Melody-sync로 당신의 작업을 더욱 효율적으로 만들어보세요.
          </BottomDescription>
          <BottomButtons>
            <BottomDownloadButton
              href="https://github.com/abwarten/Melody-Sync-Release/releases/download/v0.0.3-beta/MelodySync-Setup-0.0.3-beta.exe"
              target="_blank"
            >
              <FaDownload />
              다운로드
            </BottomDownloadButton>
            <BottomDiscordButton
              href="https://discord.gg/vJBQAsBmDR"
              target="_blank"
            >
              <FaDiscord />
              디스코드 참여
            </BottomDiscordButton>
          </BottomButtons>
        </BottomLeft>
        <BottomRight>
          <img src="/IMG@1x.png" alt="DAW Interface" />
        </BottomRight>
      </BottomInner>
    </BottomSection>
  );
};
