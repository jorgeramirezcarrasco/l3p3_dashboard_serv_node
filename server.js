
//!/usr/bin/nodejs
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
    setTimeout(function() {
        ws.send(Date.now().toString(), {mask: true});
    }, 5000);
    ws.send(' 2 0 0 1488 144 5916 2 2 57 75 142 42');
    setTimeout(function() {
        ws.send(Date.now().toString(), {mask: true});
    }, 5000);
    ws.send(' 2 1 2 10098488 1344 3915916 0 2 52 75 142 492');
    setTimeout(function() {
        ws.send(Date.now().toString(), {mask: true});
    }, 5000);
    ws.send(' 2 5 3 20098488 3344 3315916 0 0 57 35 342 492');
    setTimeout(function() {
        ws.send(Date.now().toString(), {mask: true});
    }, 5000);
    ws.send(' 2 4 0 14098488 1344 3125916 1 0 57 75 142 492');
    setTimeout(function() {
        ws.send(Date.now().toString(), {mask: true});
    }, 5000);
    ws.send(' 2 1 2 10098488 1344 3915916 0 2 52 75 142 492');
    setTimeout(function() {
        ws.send(Date.now().toString(), {mask: true});
    }, 5000);
    ws.send(' 2 5 3 20098488 3344 3315916 0 0 57 35 342 492');
    setTimeout(function() {
        ws.send(Date.now().toString(), {mask: true});
    }, 5000);
    ws.send(' 2 4 0 14098488 1344 3125916 1 0 57 75 142 492');
    setTimeout(function() {
        ws.send(Date.now().toString(), {mask: true});
    }, 500);
    ws.send(' 2 0 0 10098488 1344 3115916 0 0 57 75 142 492');
    setTimeout(function() {
        ws.send(Date.now().toString(), {mask: true});
    }, 5000);
    ws.send(' 2 1 2 10098488 1344 3915916 0 2 52 75 142 492');
    setTimeout(function() {
        ws.send(Date.now().toString(), {mask: true});
    }, 5000);
    ws.send(' 2 1 2 10098488 1344 3915916 43430 222 52 75 142 492');
    setTimeout(function() {
        ws.send(Date.now().toString(), {mask: true});
    }, 5000);
    ws.send(' 2 5 3 20098488 3344 3315916 3330 3330 57 35 342 492');
    setTimeout(function() {
        ws.send(Date.now().toString(), {mask: true});
    }, 5000);
    ws.send(' 2 4 0 14098488 1344 3125916 1 0 57 75 142 492');
    setTimeout(function() {
        ws.send(Date.now().toString(), {mask: true});
    }, 5000);
    ws.send(' 2 5 3 20098488 3344 3315916 0 0 57 35 342 492');




});