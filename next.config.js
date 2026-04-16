/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['@prisma/client', 'prisma'],
  allowedDevOrigins: ['192.168.31.88'],
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: 'bottom-right',
  },
}

module.exports = nextConfig