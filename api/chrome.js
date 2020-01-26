
const ws = require("ws")

// TODO: Add configuration pls I can't deal with this dumb shit
const port = 8081

const wss = new ws.Server({port:port})
console.log("Starting Websocket server on port: " + port);

var socket = null;


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

wss.on('connection', function (sock){
    console.log("conencted to extension");
    socket = sock
})


module.exports = {
    getHistory:getHistory
}