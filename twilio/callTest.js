// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'AC5939b954c24cb577caa74dd703170f63';
const authToken = '304534b495312c10ae09e69131970921';
const client = require('twilio')(accountSid, authToken);

var num = '+447871239341';

client.calls
      .create({
         twiml: '<Response><Say>Seven days!</Say></Response>',
         from: '+12014743543',
         to: num
       })
      .then(call => console.log(call.sid));