module.exports = {
  env: {
    ORIGIN: process.env.ORIGIN || `https://${process.env.VERCEL_URL}`,
    GITHUB_ACCESS_TOKEN: process.env.GITHUB_ACCESS_TOKEN,
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
};
