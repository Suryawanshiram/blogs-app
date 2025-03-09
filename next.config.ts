import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port:"",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port:"",
      },
    ],
  }
};

export default nextConfig;
