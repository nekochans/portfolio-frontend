/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    domains: [
      'avatars0.githubusercontent.com',
      'avatars1.githubusercontent.com',
      'www.mindexer.net',
      'lgtmeow.com',
    ],
  },
  swcMinify: true,
  experimental: {
    styledComponents: true,
  },
};

export default config;
