/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dribbble.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  env: {
    NOTION_DATABASE_ID: "243965e5e6004d1c87613042d69d78e1",
    SANITY_STUDIO_DATASET: "production",
    SANITY_STUDIO_PROJECT_ID: "htvynbuk",
    NOTION_INTERNAL_INTEGRATION_TOKEN:
      "secret_cRgjvmX3JTsuFbqEvJicBAWWRBnf0b6lJewhn2dLma2",
  },
};

module.exports = nextConfig;
