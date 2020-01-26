
function setup(){
    const socket = new WebSocket("ws://localhost:8081")
    socket.addEventListener('message', function(event)
    {
        socket.send("http://google.com")
    })
    socket.addEventListener('error', setup);
    socket.addEventListener('close', setup);
}

setup()

