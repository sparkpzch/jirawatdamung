import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // If your repository name is not your-username.github.io, uncomment and set basePath
  // basePath: process.env.NODE_ENV === 'production' ? '/repository-name' : '',
  // trailingSlash: true,
};

export default nextConfig;
