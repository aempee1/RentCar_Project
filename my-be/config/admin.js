const crypto = require('crypto');

const generateSalt = () => {
  return crypto.randomBytes(16).toString('base64');
};

const generateSecret = () => {
  return crypto.randomBytes(16).toString('base64');
};

module.exports = ({ env }) => ({
  auth: {
    secret: generateSecret(),
  },
  apiToken: {
    salt: generateSalt(),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
