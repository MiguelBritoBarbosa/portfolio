import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./src/**/*.tsx'],
    theme: {
        extend: {},
    },
    plugins: [],
    prefix: 'tw-',
    corePlugins: {
        preflight: false,
    },
};
export default config;
