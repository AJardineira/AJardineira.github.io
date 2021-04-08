var express = require('express'),  
    app = express();
var fs = require('fs');
var path = require('path');

app.use(express.static(__dirname));

app.get('/', function(req, res){
    res.sendFile("index.html")
})

app.listen(80, function(){
    console.log("[+]inicializando servidor")
})