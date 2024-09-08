import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'portifolio_backend',
                port: '1337',
                pathname: '/uploads/**',
            },
            {
                protocol: 'https',
                hostname: 'api.miguelbritobarbosa.com.br',
                pathname: '/uploads/**',
            },
        ],
        deviceSizes: [640, 768, 1024, 120],
    },
    reactStrictMode: false,
};

export default withNextIntl(nextConfig);
