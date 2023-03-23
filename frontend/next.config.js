/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "oscardelossantos.herokuapp.com",
        port: "",
        pathname: "/public/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/public/images/**",
      },
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
