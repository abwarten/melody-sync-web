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

      html,
      body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
          Roboto, sans-serif;
      }

      body {
        min-height: 100vh;
        position: relative;
      }

      :root {
        --background: #000000;
        --foreground: #ffffff;
      }
    `}
  />
);
