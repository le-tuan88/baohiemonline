import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,

  async redirects() {
    return [
      { source: '/index.php', destination: '/', permanent: true },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.WORDPRESS_DOMAIN || "quanly.baohiem.online",
        pathname: "/**",
      },
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "img.icons8.com", pathname: "/**" },
      { protocol: "https", hostname: "upload.wikimedia.org", pathname: "/**" },
    ],
  },
};

export default nextConfig;
