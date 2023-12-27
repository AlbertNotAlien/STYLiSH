/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_API_HOST_NAME,
      },
    ],
  },
};

module.exports = nextConfig;
