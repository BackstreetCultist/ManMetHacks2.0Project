const accountSid = 'AC5939b954c24cb577caa74dd703170f63';
const authToken = '304534b495312c10ae09e69131970921';
const client = require('twilio')(accountSid, authToken);

var express = require("express");
var num = '+447871239341';

app = express();

port =  8080;

app.listen(port);

app.get("/threaten/:threatID", function(req,res){
    res.send("threat level: "+req.params['threatID'])
	
	switch(req.params['threatID']){
		case '3':
			client.messages
			  .create({
				 body: 'Monkey loves you',
				 from: '+12014743543',
				 to: num
			   })
			  .then(message => console.log(message.sid));
			break;
		case '4':
			client.calls
			  .create({
				 twiml: '<Response><Say voice="alice">Hello, friend.</Say><Play></Play><Say voice="alice">Goodbye, friend.</Say></Response>',
				 from: '+12014743543',
				 to: num
			   })
			  .then(call => console.log(call.sid));
			break;
	}
})

app.get("/twitter/:threatID", function(req,res){
    res.send("threat level: "+req.paramas['threatID'])
})


console.log("server listening on port: "+port)
