/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // If we one day decide to host this with Node or directly on Vercel
  // we can use this instead of the basePath provider to rewrite api urls
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: process.env.API_PATH + '/:path*',
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
