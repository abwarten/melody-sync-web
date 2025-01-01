"use client";

import styled from "@emotion/styled";
import { Button } from "@/shared/ui";
import { FaDiscord } from "react-icons/fa";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background-color: transparent;
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #000;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.6;
  max-width: 600px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const DAWHeader = () => {
  return (
    <HeaderWrapper>
      <TitleGroup>
        <Title>DAW 자막 싱크로나이저 (Beta)</Title>
        <Subtitle>
          DAW의 오디오 신호와 자막을 실시간으로 동기화하여 OBS에 출력하는
          도구입니다.
        </Subtitle>
      </TitleGroup>
      <ButtonGroup>
        <Button variant="primary">시작하기</Button>
        <Button variant="secondary">
          <FaDiscord />
          디스코드 참여
        </Button>
      </ButtonGroup>
    </HeaderWrapper>
  );
};
