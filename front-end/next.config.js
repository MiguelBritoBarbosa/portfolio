/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true,
    },
    images: {
        domains: ['localhost', 'fakeimg.pl'],
    },
    reactStrictMode: false,
};

module.exports = nextConfig;
