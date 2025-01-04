import ReactMarkdown from "react-markdown";
import styled from "@emotion/styled";
import tw from "twin.macro";

const StyledMarkdown = styled.div`
  ${tw`max-w-none`}

  h1 {
    ${tw`text-3xl font-bold mb-6`}
  }

  h2 {
    ${tw`text-2xl font-bold mb-4 mt-8`}
  }

  p {
    ${tw`text-gray-700 mb-4 leading-relaxed`}
  }

  ul {
    ${tw`list-disc pl-6 mb-4`}
  }

  li {
    ${tw`mb-2`}
  }
`;

interface MarkdownContentProps {
  children: string;
}

export const MarkdownContent = ({ children }: MarkdownContentProps) => {
  return (
    <StyledMarkdown>
      <ReactMarkdown>{children}</ReactMarkdown>
    </StyledMarkdown>
  );
};
