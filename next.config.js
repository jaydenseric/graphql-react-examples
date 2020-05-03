module.exports = {
  env: {
    ORIGIN: process.env.ORIGIN || `https://${process.env.VERCEL_URL}`,
  },
};
