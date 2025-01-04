export const metadata = {
  metadataBase: new URL("https://melody-sync.vercel.app"),
  title: "MelodySync - DAW 자막 동기화 도구",
  description:
    "DAW의 오디오 신호와 자막을 실시간으로 동기화하여 OBS에 출력하는 도구입니다.",
  keywords: ["DAW", "자막", "동기화", "OBS", "스트리밍", "방송"],
  authors: [{ name: "MelodySync Team" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://melody-sync.vercel.app",
    title: "MelodySync - DAW 자막 동기화 도구",
    description:
      "DAW의 오디오 신호와 자막을 실시간으로 동기화하여 OBS에 출력하는 도구입니다.",
    siteName: "MelodySync",
  },
  twitter: {
    card: "summary_large_image",
    title: "MelodySync - DAW 자막 동기화 도구",
    description:
      "DAW의 오디오 신호와 자막을 실시간으로 동기화하여 OBS에 출력하는 도구입니다.",
    creator: "@melodysync",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
