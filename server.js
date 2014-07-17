
//!/usr/bin/nodejs
var d3 = require("d3");
var fs = require('fs');
var csvrow = require('csv-string');
var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({port: 8080});

var onFunction = function (){
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
        d3.csv.parse(data);
        csvrow.forEach(data, '/b', function(row, index) {

            if(i==index) {
                ws.send(row.toString());
                console.log(row.toString());


            }
            setTimeout(function () {
                i = i + 1;
            }, 200);


        });

    })



});
