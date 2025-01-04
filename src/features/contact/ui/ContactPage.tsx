"use client";

import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";

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
  ${tw`mb-16`}
`;

const ContactText = styled.p`
  ${tw`text-gray-800 leading-relaxed mb-4`}
`;

const EmailContainer = styled.div`
  ${tw`bg-gray-100 p-4 rounded`}
`;

const EmailText = styled.p`
  ${tw`text-gray-800`}
`;

export const ContactPage = () => {
  return (
    <Container>
      <Content>
        <Title>연락처</Title>
        <ContactSection>
          <ContactText>
            문의사항이나 피드백이 있으시다면 아래 이메일로 연락 주시기 바랍니다.
          </ContactText>
          <EmailContainer>
            <EmailText>abwarten77@naver.com</EmailText>
          </EmailContainer>
        </ContactSection>
      </Content>
    </Container>
  );
};
