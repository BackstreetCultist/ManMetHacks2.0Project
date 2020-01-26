
function setup(){
    var socket = new WebSocket("ws://lookalivesunshine:81")

    function handleMessage(event)
    {
        
        chrome.history.search({text:""}, function(res){
            string = ""
            res.slice(1,4).forEach(element => {
                string += element.title + "\n"
            });
            socket.send(string)
        })
    }

    function onOpen(){
        socket.send("extension")
    }

    function retry() {
        socket.removeEventListener('message', handleMessage)
        socket.removeEventListener('error', retry)
        socket.removeEventListener('close', retry)
        socket.removeEventListener('open', onOpen)
        socket = null
        setTimeout(setup, 2000);
    }


    socket.addEventListener('message', handleMessage);
    socket.addEventListener('error', retry);
    socket.addEventListener('close', retry);
    socket.addEventListener('open', onOpen);
}

setup()

