/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "media.graphassets.com",
      },
    ],
  },
};

export default nextConfig;
