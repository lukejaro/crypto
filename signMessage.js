
const hash = require('hash'); 
const fs = require('fs'); 
const crypto = require('crypto'); 
const hash = crypto.hash; 


const data = {
    name: 'this is a signed Document',
    message:'document for verification'
}
const myDataString  = JSON.stringify(data);

const senderPrivateKey = fs.readFileSync(__dirname + '/privateKey.pem','utf8') ;
