//#!/usr/bin/nodejs

var TIME_OUT = 500

var fs = require('fs');
var WebSocketServer = require('ws').Server
    , wss = new WebSocketServer({port: 8080});

var onFunction = function (){
}
var ip;
var recurso;
var line_csv=1;
var timeoutFunction = function (ws,line,data) {
    ip =ws.upgradeReq.connection.remoteAddress;
    console.log("Sending data to  "+ip+"   :"+data[line]);
    ws.send(data[line]);
    line++;
    line_csv=line;
    if(line==data.length){
        line=1;
    }
    setTimeout(timeoutFunction.bind(this,ws,line,data),TIME_OUT)
}

wss.on('connection', function(ws) {
    ws.send('');
    var ruta = "public/csv/nodes.csv";
    var i =0;
    fs.readFile(ruta, 'utf8', function (err, data) {
        var data2 = data.split("\n");
        ws.send(data2[0]);
        setTimeout(timeoutFunction.bind(this,ws,line_csv,data2),TIME_OUT);
    });

    ws.on('message', function(message) {
        console.log('received: %s', message);
        if(!isNaN(parseFloat(message)) && isFinite(message)) {

            TIME_OUT = message * 10;
        }
        else{
            if(message=="Color Map request" && recurso!=undefined){
                ws.send(recurso);
                console.log("El recurso "+recurso+" ha sido envíado");
            }
            else{
                if(message!="Color Map request"){
                recurso=message;
                console.log("El recurso "+recurso+" ha sido almacenado");
                }
        }}
    });

});