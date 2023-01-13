

const fs = require('fs');
const crypto = require('crypto');

// Generate a key pair
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 4096,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem'
  }
});

// Write the keys to a file
fs.writeFileSync('publicKey.pem', publicKey);
fs.writeFileSync('privateKey.pem', privateKey);