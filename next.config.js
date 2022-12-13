const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  images: {
    domains: ['img.storyblok.com', 'a.storyblok.com'],
  },
  env: {
    STORYBLOK_TOKEN: process.env.STORYBLOK_TOKEN,
    PREVIEW_TOKEN: process.env.PREVIEW_TOKEN,
  },
})
