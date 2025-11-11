// // import createNextIntlPlugin from 'next-intl/plugin';

// // const withNextIntl = createNextIntlPlugin();

// // /** @type {import('next').NextConfig} */
// // const nextConfig = {};

// // export default withNextIntl(nextConfig);
// import createNextIntlPlugin from "next-intl/plugin";

// const withNextIntl = createNextIntlPlugin();

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["images.ctfassets.net"],
//   },
// };

// export default withNextIntl(nextConfig);
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  images: {
    domains: ["images.ctfassets.net"],
  },

  // ✅ 301 редірект з /pl → /
  async redirects() {
    return [
      {
        source: "/pl/:path*", // усе, що починається з /pl
        destination: "/:path*", // перекидаємо на корінь
        permanent: true, // 301 redirect (для SEO)
      },
    ];
  },
};

export default withNextIntl(nextConfig);
