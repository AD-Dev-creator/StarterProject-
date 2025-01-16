import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  exportPathMap: async () => {
    return {
      "/": { page: "/home" },
    };
  },
};

export default nextConfig;
