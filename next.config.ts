import type { NextConfig } from 'next';
import ROUTES from '@/constants/routes';

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '5mb',
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'linkdeckbucket.s3.us-east-1.amazonaws.com',
        port: '',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'linkoo-prod.s3.us-east-1.amazonaws.com',
        port: '',
        search: '',
      },
    ],
  },
};

export default nextConfig;
