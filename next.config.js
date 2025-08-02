/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3000/api/:path*',
      },
    ];
  },
  webpack: (config, { isServer }) => {
    // Server-specific configuration
    if (isServer) {
      config.externals = [...config.externals, 'bcrypt'];
    }
    return config;
  },
}
