/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
  // Ensure Prisma Client is available
  webpack: (config) => {
    config.externals.push('@prisma/client');
    return config;
  },
}

module.exports = nextConfig
