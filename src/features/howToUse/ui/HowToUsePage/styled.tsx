import styled from "@emotion/styled";
import tw from "twin.macro";

export const Container = styled.div`
  ${tw`min-h-screen bg-white pt-24 pb-16`}
`;

export const Content = styled.div`
  ${tw`max-w-4xl mx-auto px-4 sm:px-5 md:px-6`}

  h1 {
    ${tw`text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-7 md:mb-8`}
  }

  h2 {
    ${tw`text-xl sm:text-2xl md:text-2xl font-semibold mb-4 sm:mb-5 md:mb-6 mt-8 sm:mt-10 md:mt-12`}
  }

  h3 {
    ${tw`text-lg sm:text-xl md:text-xl font-semibold mb-3 sm:mb-3.5 md:mb-4 mt-6 sm:mt-7 md:mt-8`}
  }

  p {
    ${tw`text-sm sm:text-base md:text-base text-gray-800 mb-4 leading-relaxed`}
  }

  ul,
  ol {
    ${tw`text-sm sm:text-base md:text-base text-gray-800 mb-4 pl-4 sm:pl-5`}
    list-style-type: disc;
  }

  li {
    ${tw`mb-2 sm:mb-2.5`}
  }

  img {
    ${tw`rounded-lg my-6 sm:my-7 md:my-8`}
    max-width: 100%;
    height: auto;
  }
`;
