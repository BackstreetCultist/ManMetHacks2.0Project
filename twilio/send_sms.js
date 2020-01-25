// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'AC5939b954c24cb577caa74dd703170f63';
const authToken = '304534b495312c10ae09e69131970921';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Im Doctor Death-Defying',
     from: '+12014743543',
     to: '+447871239341'
   })
  .then(message => console.log(message.sid));