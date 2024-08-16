/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        DOG_API_KEY: "live_8Yr8nDd5o98ZSm0V71Jpabf2ETZ0z9VRyoIdHbehabwDZjBvnMZ8vMM6WRQqQBqC",
        CAT_API_KEY: "live_LWJwgd8HID9pq8lAoCqPwwncuvYh25RBXZxVYcdtodlh2dYPSRTEtsha1jTLvapk"
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn2.thedogapi.com',
                port: '',
            },
        ],
    },
};

export default nextConfig;
