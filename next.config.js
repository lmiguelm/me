/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

const nextConfig = {
  ...withPWA({
    dest: "public",
    register: true,
    skipWaiting: true,
  }),
  images: {
    domains: [
      "lmguelm-portfolio-images.s3-sa-east-1.amazonaws.com",
      "firebasestorage.googleapis.com",
      "github.com",
      "images.prismic.io",
    ],
  },
};

module.exports = nextConfig;
