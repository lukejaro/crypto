const crypto = require('crypto');
const hash = crypto.createHash('sha256');
const encrypt = require('./encrypt'); 
const fs = require('fs'); 
const decrypt = require('./decrypt.js'); 

const publickey= fs.readFileSync(__dirname + '/publicKey.pem','utf8'); 


// message to transport
const encryptedMessage = encrypt.encryptWithPublicKey(publickey,"hey what is up man"); 

///console.log(encryptedMessage.toString());

//decrypt that message with the private key 
const privateKey = fs.readFileSync(__dirname + '/privateKey.pem');

const decryptedMessage = decrypt.decryptWithPrivateKey(privateKey,encryptedMessage); 
console.log(decryptedMessage.toString());
