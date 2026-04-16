/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['@prisma/client', 'prisma'],
  allowedDevOrigins: ['192.168.31.88'],
}

module.exports = nextConfig

module.exports = {
  devIndicators: {
    buildActivity: false, // Disables the "building..." indicator
    buildActivityPosition: 'bottom-right',
  },
};