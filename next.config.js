const securityHeaders = [
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
];

module.exports = {
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
  images: {
    domains: [process.env.NEXT_IMAGE_DOMAIN],
  },
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'it'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  trailingSlash: true,
};
