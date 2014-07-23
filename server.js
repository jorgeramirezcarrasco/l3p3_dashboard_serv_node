var TIME_OUT = 500;

var fs = require('fs');
var WebSocketServer = require('ws').Server
    , wss = new WebSocketServer({port: 8080});

var ip, resource;
var websockets=[];
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
    websockets.push(ws);
    ws.send('');
    var route = "public/csv/nodes.csv"; //path to the .csv file to broadcast
    fs.readFile(route, 'utf8', function (err, data) {
        var data2 = data.split("\n");
        ws.send(data2[0]);
        setTimeout(timeoutFunction.bind(this,ws,line_csv,data2),TIME_OUT);
    });
    ws.on('message', function(message) {
        console.log('received: %s', message);
        if(!isNaN(parseFloat(message)) && isFinite(message)) {
            //if a number is received, then it is a new timeout value
            TIME_OUT = message * 10;
        }
        else if(message!="Color Map request"){
            //if no ColorMap request, then a resource name has been received
            resource=message;
            console.log("Resource "+resource+" has been stored");
             for(var i=0;i<websockets.length;i++)
                 //broadcasts the new resource to all machines
                 websockets[i].send(resource);
        }
        else if(resource!=undefined){
            //if a ColorMap request if received, send the resource if there is one (else does nothing)
            ws.send(resource);
            console.log("Resource "+resource+" has been sent");
        }
    });
});