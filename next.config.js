/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['default'],
    defaultLocale: 'default',
    localeDetection: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig
