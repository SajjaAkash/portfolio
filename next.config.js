/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    unoptimized: true,
  },
  allowedDevOrigins: [
    'https://f42f788d-4bb0-4dc3-b70d-f952e32c2cb4-00-2lyy30xy8ohiz.janeway.replit.dev',
    'http://f42f788d-4bb0-4dc3-b70d-f952e32c2cb4-00-2lyy30xy8ohiz.janeway.replit.dev',
  ],
}

module.exports = nextConfig
