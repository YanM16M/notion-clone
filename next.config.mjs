/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "files.edgestore.dev",
                pathname: '**',
            }
        ]
    }
};

export default nextConfig;
