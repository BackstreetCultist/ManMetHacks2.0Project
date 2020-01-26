
const ws = require("ws")

// TODO: Add configuration pls I can't deal with this dumb shit
const port = 8081

const wss = new ws.Server({port:port})
console.log("Starting Websocket server on port: " + port);

var socket = null;
var pisocket = null;


function getHistory(listener)
{
    if (socket)
    {
        // only supports one atm 
        socket.send('get-history');
        socket.on('message', function wrapper(msg)
        {
            listener(msg);
            socket.removeListener('message', wrapper)
        });
    }
    else{listener(null)}
}

function makeCoffee()
{
    if (pisocket)
    {
        pisocket.send("make");
    }
}

wss.on('connection', function (sock){
    sock.on('message', function xkcd(msg) {
        if (msg.data === "pi")
        {
            console.log("conencted to pi");
            pisocket = sock
        }
        else
        {
            console.log("conencted to extension");
            socket = sock;
        }
    })
    socket = sock
})


module.exports = {
    getHistory:getHistory
}