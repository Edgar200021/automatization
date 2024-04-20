/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/sign-in',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
