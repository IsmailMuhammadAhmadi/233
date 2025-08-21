/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb', // Tetap dipertahankan jika Anda perlu ukuran body lebih besar untuk server actions
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kqajb4b5foo1vkun.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  reactStrictMode: true, // Tetap gunakan untuk pengembangan yang lebih ketat
  // Hapus swcMinify karena sudah default
};

export default nextConfig;