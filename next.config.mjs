/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "static.vecteezy.com",
            },
        ],
        domains: ["cdn.imagin.studio", "maps.gstatic.com"],
    },
};

export default nextConfig;
