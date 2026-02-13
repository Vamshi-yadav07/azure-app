import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',        // <--- enable standalone build
  poweredByHeader: false,      // recommended for security
  compress: false,             // disable built-in compression (Azure handles it)
  reactStrictMode: true 
};

export default nextConfig;
