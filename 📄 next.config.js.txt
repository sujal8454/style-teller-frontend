/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["ibb.co", "firebasestorage.googleapis.com"]
  }
};


module.exports = nextConfig;