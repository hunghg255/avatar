/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/avatar/:path*',
        destination: '/api/avatar/:path*',
      },
      {
        source: '/qr/:path*',
        destination: '/api/qr/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
