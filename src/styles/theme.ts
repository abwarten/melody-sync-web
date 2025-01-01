import { css } from "@emotion/react";

export const theme = {
  colors: {
    background: "#111",
    foreground: "#fff",
  },
};

export const globalStyles = css`
  :root {
    --background: ${theme.colors.background};
    --foreground: ${theme.colors.foreground};
  }

  body {
    margin: 0;
    padding: 0;
    background-color: var(--background);
    color: var(--foreground);
  }
`;
