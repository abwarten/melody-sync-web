"use client";

import styled from "@emotion/styled";
import tw from "twin.macro";
import { FaDownload } from "react-icons/fa";

const Container = styled.div`
  ${tw`min-h-screen bg-white pt-24 pb-16`}
`;

const Content = styled.div`
  ${tw`max-w-4xl mx-auto px-6`}
`;

const Title = styled.h1`
  ${tw`text-4xl font-bold text-black mb-12`}
`;

const Section = styled.section`
  ${tw`mb-16`}
`;

const SectionTitle = styled.h2`
  ${tw`text-2xl font-semibold text-black mb-6`}
`;

const SubSection = styled.div`
  ${tw`mb-8`}
`;

const SubTitle = styled.h3`
  ${tw`text-xl font-semibold text-black mb-4`}
`;

const StepList = styled.ol`
  ${tw`space-y-4`}
`;

const Step = styled.li`
  ${tw`flex gap-3`}
`;

const StepNumber = styled.span`
  ${tw`font-semibold text-gray-400`}
`;

const StepContent = styled.span`
  ${tw`text-gray-800 leading-relaxed`}
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
  text-decoration: none;

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

export default function HowToUsePage() {
  return (
    <>
      <TopBar>
        <LeftSection>
          <TopBarTitle>Melody-sync</TopBarTitle>
          <NavLinks>
            <NavLink href="/">홈</NavLink>
            <NavLink href="/how-to-use" isActive={true}>
              사용방법
            </NavLink>
            <NavLink href="/contact">연락처</NavLink>
          </NavLinks>
        </LeftSection>
        <RightNav>
          <DownloadButton
            href="https://github.com/abwarten/Melody-Sync-Release/releases/download/v0.0.3-beta/MelodySync-Setup-0.0.3-beta.exe"
            target="_blank"
          >
            <FaDownload className="mr-2" />
            다운로드
          </DownloadButton>
        </RightNav>
      </TopBar>
      <Container>
        <Content>
          <Title>사용 방법</Title>

          <Section>
            <SectionTitle>1. 원컴 세팅</SectionTitle>
            <StepList>
              <Step>
                <StepNumber>1.1</StepNumber>
                <StepContent>
                  OBS → 도구 → WebSocket 서버 설정 → 서버 port 번호를 프로그램의
                  port 란에 입력
                </StepContent>
              </Step>
              <Step>
                <StepNumber>1.2</StepNumber>
                <StepContent>
                  인증 기능 사용이 체크되어 있을 경우 authentication을
                  활성화하고 프로그램의 비밀번호 입력
                </StepContent>
              </Step>
              <Step>
                <StepNumber>1.3</StepNumber>
                <StepContent>MIDI Input에서 loopMIDI port 선택</StepContent>
              </Step>
              <Step>
                <StepNumber>1.4</StepNumber>
                <StepContent>Language는 사용자에 맞게 선택</StepContent>
              </Step>
              <Step>
                <StepNumber>1.5</StepNumber>
                <StepContent>
                  새 노래 추가 → .srt 형식의 파일 선택 → 자막에 맞는 언어 선택
                </StepContent>
              </Step>
              <Step>
                <StepNumber>1.6</StepNumber>
                <StepContent>아티스트, 메모 란은 선택 사항</StepContent>
              </Step>
              <Step>
                <StepNumber>1.7</StepNumber>
                <StepContent>
                  언어 선택 (복수 선택 가능)에서는 OBS에 띄우고 싶은 언어만 선택
                </StepContent>
              </Step>
              <Step>
                <StepNumber>1.8</StepNumber>
                <StepContent>곡 삭제는 오른쪽 마우스 클릭으로 가능</StepContent>
              </Step>
              <Step>
                <StepNumber>1.9</StepNumber>
                <StepContent>노래 검색 창에서 검색 가능</StepContent>
              </Step>
            </StepList>
          </Section>

          <Section>
            <SectionTitle>2. 투컴 세팅</SectionTitle>
            <StepList>
              <Step>
                <StepNumber>2.1</StepNumber>
                <StepContent>
                  OBS가 설치된 컴퓨터와 DAW 컴퓨터가 다른 경우:
                  <br />
                  OBS 컴퓨터에서 제어판 → 방화벽 → 고급설정 → 인바운드 규칙 → 새
                  규칙 → 포트 → 특정 로컬 포트에 OBS port 입력 → 연결 허용 →
                  다음 → 이름에 MelodySync 입력
                </StepContent>
              </Step>
              <Step>
                <StepNumber>2.2</StepNumber>
                <StepContent>
                  OBS → 도구 → WebSocket 서버 설정 → 서버 port 번호를 프로그램의
                  port 란에 입력
                </StepContent>
              </Step>
              {/* 2.3부터 2.9까지는 원컴 세팅과 동일한 내용이므로 생략 */}
            </StepList>
            <SubSection>
              <SubTitle>추가 설정</SubTitle>
              <StepList>
                <Step>
                  <StepContent>
                    2.3 ~ 2.9의 설정은 원컴 세팅의 1.3 ~ 1.9와 동일합니다.
                  </StepContent>
                </Step>
              </StepList>
            </SubSection>
          </Section>

          <Section>
            <SectionTitle>3. DAW 설정 (Studio One 6)</SectionTitle>
            <StepList>
              <Step>
                <StepContent>
                  Studio One 메뉴 → 옵션 → 외장장치 → 추가 → 새악기 → 받기,
                  보내기 loopMidi 선택 → MIDI 클락 보내기, MIDI 클락 스타트
                  사용, MIDI 타임코드 보내기 선택 후 확인
                </StepContent>
              </Step>
            </StepList>
            <StepContent style={{ marginTop: "16px", color: "#666" }}>
              - 설정 문의는 디스코드나 메일로 부탁드립니다 :)
            </StepContent>
          </Section>

          <Section>
            <SectionTitle>4. OBS 설정</SectionTitle>
            <StepList>
              <Step>
                <StepContent>
                  소스 목록 → 추가 → 텍스트(GDI+) 선택 → 이름을 srt 로 변경 →
                  확인
                </StepContent>
              </Step>
            </StepList>
          </Section>
        </Content>
      </Container>
    </>
  );
}
