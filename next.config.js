/** @type {import('next').NextConfig} */
const nextConfig = {
    // basePath: '/ORDERME1.1',
    output:'export',
    distDir:'dist',
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig
