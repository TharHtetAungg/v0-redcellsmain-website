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
  async redirects() {
    return [
      {
        source: '/terms',
        destination: '/legal/terms',
        permanent: true, // 308 redirect
      },
      {
        source: '/privacy',
        destination: '/legal/privacy',
        permanent: true, // 308 redirect
      },
      {
        source: '/dpa-gdpr',
        destination: '/legal/dpa-gdpr',
        permanent: true, // 308 redirect
      },
    ]
  },
}

export default nextConfig
