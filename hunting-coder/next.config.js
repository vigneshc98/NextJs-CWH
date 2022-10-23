/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  //so that static generated file can reload on reload button click (generated html file will be copied to folders)
  trailingSlash:true
}

module.exports = nextConfig
