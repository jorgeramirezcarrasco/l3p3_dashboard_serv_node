var TIME_OUT = 500

var fs = require('fs');
var WebSocketServer = require('ws').Server
    , wss = new WebSocketServer({port: 8080});

var onFunction = function (){
}

var timeoutFunction = function (ws,line,data) {
    console.log("Sending data: "+data[line])
    ws.send(data[line]);
    line++;
    if(line==data.length){
        line=1;
    }
    setTimeout(timeoutFunction.bind(this,ws,line,data),TIME_OUT)
}

wss.on('connection', function(ws) {
    ws.on('message', function(message) {
        console.log('received: %s', message);

        TIME_OUT=message*10;

    });
    ws.send('');

    var ruta = "public/csv/nodes.csv";
    var i =0;
    fs.readFile(ruta, 'utf8', function (err, data) {
        var data2 = data.split("\n");
        setTimeout(timeoutFunction.bind(this,ws,0,data2),TIME_OUT);
    });
});