/** @type {import('next').NextConfig} */
const nextConfig = {
    // content: [
    //     // ...
    //     flowbite.content(),
    // ],
    // plugins: [
    //     // ...
    //     flowbite.plugin(),
    // ],
    images: {
        domains: ['127.0.0.1'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '127.0.0.1',
                pathname: '**',
                port: '8000',
            },
            // {
            //     protocol: 'https',
            //     hostname: 'yt3.ggpht.com',
            // },
        ],
    },
};



export default nextConfig;