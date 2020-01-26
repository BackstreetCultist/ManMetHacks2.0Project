var fs = require("fs")

var config = JSON.parse(fs.readFileSync("config.json"))

const accountSid = 'AC5939b954c24cb577caa74dd703170f63';
const authToken = config["twilio-auth-token"] 
console.log(authToken)
const client = require('twilio')(accountSid, authToken);

var Twitter = require('twitter');

var chrome = require("./chrome.js")
 
var twitterclient = new Twitter({
	consumer_key: 'FFuhR8rr712gty5EXi5xzyssx',
    consumer_secret: '0UKAAa1mVJY23hQjjnMO2L0qnQoKhrC2GRx6Irp0A8zYBEpZ3Z',
    access_token_key: '1221057192192880641-W0I7NzE1eV3s09aZkC2VXWNGu60wuK',
    access_token_secret: 'jbUBQEfkbolyiJqHhQfmNEmsW1sh99dmFP6wlMXgEGBGr'
});

var express = require("express");
var num = '+447871239341';

app = express();

// TODO:  ffs please add config 
port = 8080;

app.listen(port);

app.get("/threaten/:threatID", function(req,res){
	res.send("threat level: "+req.params['threatID'])

	switch(req.params['threatID']){
		case '4':
			client.messages
			  .create({
				 body: 'Monkey loves you',
				 from: '+12014743543',
				 to: num
			   })
			  .then(message => console.log(message.sid));
			break;
		case '3':
			client.calls
			  .create({
				 twiml: '<Response><Say voice="alice">Hello, friend.</Say><Play>http://lookalivesunshine.tech/resources/interference.wav</Play><Say voice="alice">Goodbye, friend.</Say></Response>',
				 from: '+12014743543',
				 to: num
			   })
			  .then(call => console.log(call.sid));
			break;

		case '2':
			chrome.getHistory(function(msg){
				twitterclient.post('statuses/update', {status: msg}, function(error, tweet, response) {
					if (!error) {
					console.log(tweet);
					} else {
						console.log("there was an issue");
					}
				});
			})
			break;

		case '1':
			console.log("making coffee");
			chrome.makeCoffee();
			break;
	}
})

console.log("server listening on port: "+port)
