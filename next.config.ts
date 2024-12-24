/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'img.freepik.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'static.vecteezy.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'dynamic.brandcrowd.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'marketplace.canva.com',
          pathname: '/**',
        }
      ],
    },
  }

  module.exports = nextConfig
