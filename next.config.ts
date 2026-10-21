import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  devIndicators: false,
  images: {
    domains: [
      "https://osdfwsgtyxuyalvvzkds.supabase.co",
      "https://osdfwsgtyxuyalvvzkds.supabase.co",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "osdfwsgtyxuyalvvzkds.supabase.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "osdfwsgtyxuyalvvzkds.supabase.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
