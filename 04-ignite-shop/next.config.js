/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: ['files.stripe.com'],
  },
};

module.exports = nextConfig;
