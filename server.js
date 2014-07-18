//#!/usr/bin/nodejs

var TIME_OUT = 500

var fs = require('fs');
var WebSocketServer = require('ws').Server
    , wss = new WebSocketServer({port: 8080});

var onFunction = function (){
}

var timeoutFunctinon = function (ws,line,data) {
    console.log("Sending data: "+data[line])
    ws.send(data[line])
    line++;
    setTimeout(timeoutFunctinon.bind(this,ws,line,data),TIME_OUT)
}

wss.on('connection', function(ws) {
    ws.on('message', function(message) {
        console.log('received: %s', message);
    });
    ws.send('');
    ws.send(' cpu1 int1 mem1 cpu2 int2 mem2 cpu3 int3 mem3 cpu4 int4 mem4');
    var ruta = "public/csv/nodes.csv";
    var i =0;
    fs.readFile(ruta, 'utf8', function (err, data) {
        var data2 = data.split("\n");
        console.log(data);
        setTimeout(timeoutFunctinon.bind(this,ws,0,data2),TIME_OUT);
    });
});