import type { NextConfig } from "next";

const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH;
const basePath = rawBasePath
  ? rawBasePath.startsWith("/")
    ? rawBasePath
    : `/${rawBasePath}`
  : undefined;

const nextConfig: NextConfig = {
  // Vercel deployment defaults: server-rendered Next.js (no static export)
  basePath,
};

export default nextConfig;
