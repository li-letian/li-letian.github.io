const withMDX = require('@next/mdx')({
  extension: /\.md?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

module.exports = withMDX({
  output: 'export',
  distDir: 'dist/out',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
})
