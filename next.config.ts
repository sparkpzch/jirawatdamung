import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // If your repository name is not your-username.github.io, uncomment and set basePath
  basePath: isProd ? "/jirawatdamung" : undefined,
  // trailingSlash: true,
};

export default nextConfig;
