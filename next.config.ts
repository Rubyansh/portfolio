import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",          // Enable static export
  eslint: {
    ignoreDuringBuilds: true // Disable ESLint during build
  },
  typescript: {
    ignoreBuildErrors: true  // (Optional) Disable TS errors during build
  }
};

export default nextConfig;
