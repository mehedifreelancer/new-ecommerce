import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "picsum.photos",
      "flowbite.com",
      "img.daisyui.com",
      "monsta-demo.myshopify.com",
      "themewagon.github.io",
      "maraviyainfotech.com",
      "plus.unsplash.com",
      "pub-e63b17b4d990438a83af58c15949f8a2.r2.dev",
    ],
  },
};

export default nextConfig;
