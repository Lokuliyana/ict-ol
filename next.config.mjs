import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: __dirname,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/revision-sheet/:grade/:lessonId',
        destination: '/lesson/:grade/:lessonId',
        permanent: true,
      },
      {
        source: '/revision-sheet/:path*',
        destination: '/lesson/10/g10-u1',
        permanent: true,
      },
      {
        source: '/study/:path*',
        destination: '/lesson/10/g10-u1',
        permanent: true,
      },
      {
        source: '/quiz/:path*',
        destination: '/lesson/10/g10-u1',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
