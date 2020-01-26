
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
        socket.send({'command':'get-history'});
        socket.on('message', function(msg)
        {
            console.log(msg);
            listener(msg);
        });
    }
    else{listener(null)}
}

wss.on('connection', function (sock){
    socket = sock
})


module.exports = {
    getHistory:getHistory
}