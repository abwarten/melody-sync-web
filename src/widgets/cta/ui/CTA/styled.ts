import styled from "@emotion/styled";
import tw from "twin.macro";

export const BottomSection = styled.section`
  ${tw`text-white px-4 py-8`}

  @media (min-width: 640px) {
    padding: 32px;
  }

  @media (min-width: 1024px) {
    padding: 62px 32px;
  }

  @media (min-width: 1280px) {
    padding: 62px 112px;
  }
`;

export const BottomInner = styled.div`
  ${tw`flex flex-col items-center mx-auto bg-black rounded-lg p-6`}

  @media (min-width: 640px) {
    ${tw`flex-row items-start gap-8`}
    padding: 32px;
  }

  @media (min-width: 1024px) {
    ${tw`items-center justify-between`}
    max-width: 1216px;
    height: 346px;
    padding: 0;
  }
`;

export const BottomLeft = styled.div`
  ${tw`flex flex-col items-center text-center`}

  @media (min-width: 640px) {
    ${tw`items-start text-left`}
    width: 50%;
  }

  @media (min-width: 1024px) {
    padding-left: 64px;
  }
`;

export const BottomTitle = styled.h2`
  ${tw`font-semibold`}
  font-size: 24px;
  margin-bottom: 12px;

  @media (min-width: 640px) {
    font-size: 28px;
    margin-bottom: 14px;
  }

  @media (min-width: 1024px) {
    font-size: 36px;
    margin-bottom: 16px;
  }
`;

export const BottomDescription = styled.p`
  ${tw`text-gray-400`}
  font-size: 16px;
  margin-bottom: 24px;

  @media (min-width: 640px) {
    font-size: 14px;
    margin-bottom: 28px;
  }

  @media (min-width: 1024px) {
    font-size: 20px;
    margin-bottom: 32px;
  }
`;

export const BottomButtons = styled.div`
  ${tw`flex flex-col gap-3 w-full`}
  max-width: 280px;

  @media (min-width: 640px) {
    ${tw`flex-row gap-4`}
    max-width: none;
  }
`;

export const BottomRight = styled.div`
  ${tw`w-full mt-8`}

  @media (min-width: 640px) {
    ${tw`mt-0`}
    width: 50%;
  }

  @media (min-width: 1024px) {
    ${tw`flex items-center justify-center`}
    padding-right: 64px;
    height: 346px;
    overflow: hidden;
  }

  > span {
    position: relative !important;
    width: 100% !important;
    height: auto !important;

    @media (min-width: 1024px) {
      position: absolute !important;
      top: 20px !important;
      height: 326px !important;
    }
  }

  img {
    ${tw`w-full h-auto`}
    border-radius: 8px;
    object-fit: contain;
    max-width: 100%;

    @media (min-width: 1024px) {
      max-width: 640px;
    }
  }
`;

export const BottomDownloadButton = styled.a`
  ${tw`flex items-center justify-center gap-2 px-5 py-3 bg-white text-black font-medium rounded transition-colors`}

  &:hover {
    ${tw`bg-gray-100`}
  }
`;

export const BottomDiscordButton = styled.a`
  ${tw`flex items-center justify-center gap-2 px-5 py-3 bg-indigo-600 text-white font-medium rounded transition-colors`}

  &:hover {
    ${tw`bg-indigo-700`}
  }
`;
