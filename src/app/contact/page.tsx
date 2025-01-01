"use client";

import styled from "@emotion/styled";
import tw from "twin.macro";
import { FaDownload, FaEnvelope } from "react-icons/fa";

const Container = styled.div`
  ${tw`min-h-screen bg-white pt-24 pb-16`}
`;

const Content = styled.div`
  ${tw`max-w-4xl mx-auto px-6`}
`;

const Title = styled.h1`
  ${tw`text-4xl font-bold text-black mb-12`}
`;

const ContactSection = styled.section`
  ${tw`flex flex-col items-center justify-center text-center`}
`;

const ContactText = styled.p`
  ${tw`text-lg text-gray-600 mb-8 leading-relaxed`}
`;

const EmailContainer = styled.div`
  ${tw`flex items-center justify-center gap-3 bg-gray-50 px-6 py-4 rounded-lg`}
`;

const EmailText = styled.span`
  ${tw`text-lg font-medium text-gray-800`}
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

export default function ContactPage() {
  return (
    <>
      <TopBar>
        <LeftSection>
          <TopBarTitle>Melody-sync</TopBarTitle>
          <NavLinks>
            <NavLink href="/">홈</NavLink>
            <NavLink href="/how-to-use">사용방법</NavLink>
            <NavLink href="/contact" isActive={true}>
              연락처
            </NavLink>
          </NavLinks>
        </LeftSection>
        <RightNav>
          <DownloadButton>
            <FaDownload className="mr-2" />
            다운로드
          </DownloadButton>
        </RightNav>
      </TopBar>
      <Container>
        <Content>
          <Title>연락처</Title>
          <ContactSection>
            <ContactText>
              문의사항이나 피드백이 있으시다면 아래 이메일로 연락 주시기
              바랍니다.
            </ContactText>
            <EmailContainer>
              <EmailText>abwarten77@naver.com</EmailText>
            </EmailContainer>
          </ContactSection>
        </Content>
      </Container>
    </>
  );
}
