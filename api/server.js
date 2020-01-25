
var express = require("express");
app = express(); 

port =  8080;

app.listen(port);

app.post("/threaten/:threatID", function(req,res){
    res.send("threat level: "+req.params['threatID'])
})

app.post("/twitter/:threatID", function(req,res){
    res.send("threat level: "+req.paramas['threatID'])
})


console.log("server listening on port: "+port)