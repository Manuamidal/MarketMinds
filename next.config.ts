/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/Level1',
        destination: '/level1',
      },
      {
        source: '/Level1/:path*',
        destination: '/level1/:path*',
      },
    ]
  },
}

export default nextConfig
