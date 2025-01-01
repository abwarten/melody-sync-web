/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    emotion: true,
  },
  experimental: {
    appDir: true,
    forceSwcTransforms: true,
  },
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
