/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false,
    domains: [],
  },
  swcMinify: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
