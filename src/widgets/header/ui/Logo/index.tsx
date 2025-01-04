import styled from "@emotion/styled";
import tw from "twin.macro";
import Link from "next/link";

const LogoTitle = styled.h1`
  ${tw`text-xl font-bold text-black cursor-pointer`}
`;

export const Logo = () => {
  return (
    <Link href="/" style={{ textDecoration: "none" }}>
      <LogoTitle>Melody-sync</LogoTitle>
    </Link>
  );
};
