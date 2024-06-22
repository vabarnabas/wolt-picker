/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "discovery-cdn.wolt.com",
      },
      {
        protocol: "https",
        hostname: "prod-wolt-venue-images-cdn.wolt.com",
      },
      { protocol: "https", hostname: "imageproxy.wolt.com" },
    ],
  },
};

export default nextConfig;
