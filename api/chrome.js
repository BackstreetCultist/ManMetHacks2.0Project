
const ws = require("ws")

// TODO: Add configuration pls I can't deal with this dumb shit
const port = 81

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
    console.log("incoming connection")
    sock.on('message', function xkcd(msg) {
        console.log("data: "+msg)
        if (msg === "pi")
        {
            console.log("conencted to pi");
            pisocket = sock
        }
        else
        {
            console.log("conencted to extension");
            socket = sock;
        }

        sock.removeListener("message", xkcd)
    })
    socket = sock
})


module.exports = {
    getHistory:getHistory,
    makeCoffee:makeCoffee
}
