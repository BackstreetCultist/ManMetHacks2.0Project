// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const https = require('https');
var workMode = 180000;
var timeout = setTimeout(sendReminder, workMode);
var Twitter = require('twitter');
 
var client = new Twitter({
	consumer_key: 'FFuhR8rr712gty5EXi5xzyssx',
    consumer_secret: '0UKAAa1mVJY23hQjjnMO2L0qnQoKhrC2GRx6Irp0A8zYBEpZ3Z',
    access_token_key: '1221057192192880641-W0I7NzE1eV3s09aZkC2VXWNGu60wuK',
    access_token_secret: 'jbUBQEfkbolyiJqHhQfmNEmsW1sh99dmFP6wlMXgEGBGr'
});

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	vscode.workspace.onDidChangeTextDocument(changeEvent => {
        console.log(`Did change: ${changeEvent.document.uri}`);

        for (const change of changeEvent.contentChanges) {
			 clearTimeout(timeout);
			 timeout = setTimeout(sendReminder, workMode);
        }
   });

	let intense = vscode.commands.registerCommand('extension.lookAliveSunshineIntense', function () {		
		workMode = 5000;
		clearTimeout(timeout);
		timeout = setTimeout(sendReminder, workMode, workMode);
	});
	let regular = vscode.commands.registerCommand('extension.lookAliveSunshineRegular', function () {		
		workMode = 180000;
		clearTimeout(timeout);
		timeout = setTimeout(sendReminder, workMode, workMode);
	});
	let chill = vscode.commands.registerCommand('extension.lookAliveSunshineChill', function () {		
		workMode = 600000;
		clearTimeout(timeout);
		timeout = setTimeout(sendReminder, workMode, workMode);
	});

	context.subscriptions.push(intense, regular, chill);

}

function sendReminder() {
	timeout = setTimeout(sendText, workMode, workMode);
	vscode.window.showInformationMessage('Stop being lazy :)');

}

function sendText() {
	timeout = setTimeout(activateTwitter, workMode, workMode);
	vscode.window.showInformationMessage('Sending text');

	https.get('https://lookalivesunshine.tech/threaten/1', (resp) => {
  		let data = '';
  		resp.on('data', (chunk) => {
    		data += chunk;
  		});

  		resp.on('end', () => {
    		vscode.window.showInformationMessage(data);
  		});

		}).on("error", (err) => {
  			console.log("Error: " + err.message);
		});
	}

function activateTwitter() {
	vscode.window.showInformationMessage('activating twitter');

	client.post('statuses/update', {status: 'Look alive sunshine'}, function(error, tweet, response) {
		if (!error) {
		  console.log(tweet);
		} else {
			console.log("there was an issue");
		}
	  });

}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
