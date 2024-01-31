/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    headerRewrite: true,
  },
  headers: async () => {
    return [
      {
        source: "/.well-known/apple-app-site-association",
        headers: [{ key: "content-type", value: "application/json" }],
      },
    ];
  },
};

module.exports = nextConfig;
