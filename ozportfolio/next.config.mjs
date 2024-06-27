/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
    reactStrictMode: true,
    experimental: {
      appDir: true,
    },
};

export default nextConfig;
