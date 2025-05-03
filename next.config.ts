import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["asset.kompas.com"],
  },
};

export default nextConfig;
