/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  i18n,
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  webpack(config) {
    config.resolve.alias['~'] = __dirname;
    return config;
  },
}

module.exports = nextConfig
