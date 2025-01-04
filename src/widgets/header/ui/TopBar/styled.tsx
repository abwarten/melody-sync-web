import styled from "@emotion/styled";
import tw from "twin.macro";

export const TopBarContainer = styled.div`
  ${tw`w-full bg-white flex items-center fixed top-0 left-0 right-0`}
  padding: 0 32px;
  height: 64px;
  z-index: 10;
  border-bottom: 1px solid #e5e7eb;
`;

export const LeftSection = styled.div`
  ${tw`flex items-center flex-1`}
`;

export const RightNav = styled.div`
  ${tw`flex items-center ml-auto`}
  padding-right: 64px;
`;
