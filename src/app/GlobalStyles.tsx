"use client";

import { Global, css } from "@emotion/react";

export const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      :root {
        --background: #000000;
        --foreground: #ffffff;
      }

      body {
        margin: 0;
        padding: 0;
      }
    `}
  />
);
