import type { NextConfig } from "next";
//https://ecommerce.routemisr.com/api/v1/categories
//https://ecommerce.routemisr.com/Route-Academy-categories/1681511964020.jpeg
//https://ecommerce.routemisr.com/Route-Academy-products/1680403266739-cover.jpeg
const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ecommerce.routemisr.com',

        pathname: '/Route-Academy-categories/**',
       
      },
      {
        protocol: 'https',
        hostname: 'ecommerce.routemisr.com',

        pathname: '/Route-Academy-products/**',
       
      },
      {
        protocol: 'https',
        hostname: 'ecommerce.routemisr.com',

        pathname: '/Route-Academy-brands/**',
       
      },
    ],
  },
};

export default nextConfig;
