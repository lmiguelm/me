/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "lmguelm-portfolio-images.s3-sa-east-1.amazonaws.com",
      "firebasestorage.googleapis.com",
      "github.com",
    ],
  },
};

module.exports = nextConfig;
