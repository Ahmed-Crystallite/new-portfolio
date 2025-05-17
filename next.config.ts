import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true,
    nextScriptWorkers: true,
  },
};

export default nextConfig;
