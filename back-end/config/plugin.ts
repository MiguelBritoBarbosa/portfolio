module.exports = ({ env }) => ({
    "users-permissions": {
        config: {
            jwtSecret: env("JWT_SECRET"),
        },
    },
    upload: {
        config: {
            providerOptions: {
                sizeLimit: 250 * 1024 * 1024, // 256mb in bytes
            },
        },
    },
});
