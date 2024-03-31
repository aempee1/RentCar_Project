const crypto = require('crypto');

const generateRandomKey = () => {
  return crypto.randomBytes(32).toString('hex');
}
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: [generateRandomKey(), generateRandomKey()],
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
