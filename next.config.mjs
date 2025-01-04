/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    emotion: true,
  },
  optimizeFonts: true,
  experimental: {
    appDir: true,
    forceSwcTransforms: true,
    optimizeFonts: true,
  },
  images: {
    domains: ["melody-sync.vercel.app"],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
  },
  headers: async () => [
    {
      source: "/:all*(svg|jpg|png)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, must-revalidate",
        },
      ],
    },
    {
      source: "/fonts/:all*",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
  ],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: "babel-loader",
          options: {
            presets: ["next/babel"],
            plugins: ["babel-plugin-macros", "@emotion/babel-plugin"],
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
