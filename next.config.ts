import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media2.dev.to',
      },
    ],
  },  
  compiler: {
    // Add your SWC options here
    styledComponents: true, // Example: Enable styled-components
  },
};

export default nextConfig;
