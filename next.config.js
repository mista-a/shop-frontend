/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['lp2.hm.com', 'www.ups.com', 'www2.hm.com'],
  },
  staticPageGenerationTimeout: 1200,
}

module.exports = nextConfig
