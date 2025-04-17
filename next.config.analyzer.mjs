import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

import nextConfig from './next.config.mjs';

export default withBundleAnalyzer(nextConfig); 