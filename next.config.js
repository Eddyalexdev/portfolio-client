/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  images: {
    domains: ['eddyalexdev.s3.us-east-1.amazonaws.com']
  }
}

module.exports = nextConfig
