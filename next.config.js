// next.config.js
if (!URL.canParse(process.env.WORDPRESS_API_URL)) {
    throw new Error(`
      Please provide a valid WordPress instance URL.
      Add to your environment variables WORDPRESS_API_URL.
    `);
}

const { hostname, port, pathname } = new URL(process.env.WORDPRESS_API_URL);

module.exports = async (phase, { defaultConfig }) => {
    /**
     * @type {import('next').NextConfig}
     */

    console.log("Your images URL configuration is: ", {
        hostname,
        port,
        pathname,
    });

    const nextConfig = {
        images: {
            remotePatterns: [
                {
                    protocol: "http",
                    hostname,
                    port,
                    pathname: `${pathname}/**`,
                },
                {
                    protocol: "http",
                    hostname,
                    port,
                    pathname: `/wp-content/uploads/**`,
                },
                {
                    protocol: "http",
                    hostname: "2.gravatar.com",
                    pathname: "/avatar/**",
                },
            ],
        },
    };

    return nextConfig;
};
