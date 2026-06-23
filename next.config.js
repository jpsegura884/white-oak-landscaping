/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'whiteoakrichmond.com' },
      { protocol: 'https', hostname: 'seal-richmond.bbb.org' },
    ],
  },
};
module.exports = nextConfig;
