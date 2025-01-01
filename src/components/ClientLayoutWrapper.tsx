"use client";

import { CacheProvider } from "@emotion/react";
import { Global, ThemeProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { useServerInsertedHTML } from "next/navigation";
import { useState } from "react";
import { globalStyles, theme } from "@/styles/theme";

export function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cache] = useState(() => {
    const cache = createCache({
      key: "css",
      prepend: true,
    });
    cache.compat = true;
    return cache;
  });

  useServerInsertedHTML(() => {
    return (
      <style
        data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(" ")}`}
        dangerouslySetInnerHTML={{
          __html: Object.values(cache.inserted).join(" "),
        }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}