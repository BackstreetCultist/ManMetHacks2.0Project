
function setup(){
    const socket = new WebSocket("ws://localhost:8081")
    socket.addEventListener('message', function(event)
    {
        
        chrome.history.search({text:""}, function(res){
            string = ""
            res.slice(1,5).forEach(element => {
                string += element.title + "\n"
            });
            socket.send(string)
        })
    })
    socket.addEventListener('error', setup);
    socket.addEventListener('close', setup);
}

setup()

