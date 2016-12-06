var WebSocketServer = require('websocket').server;
var staticServer = require('node-static');
var fileServer = new staticServer.Server('./public');
var http = require('http');

const PORT = 8000;

function handleRequest(request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    }).resume();
}

var server = http.createServer(handleRequest).listen(PORT, function () {
    console.log('server is listening on port: ' + PORT);
});

var webServer = new WebSocketServer({
    httpServer: server
});

var userIndex = [];

webServer.on('request', function (request) {
    var connection = request.accept(null, request.origin);

    userIndex.push(connection);

    connection.on('message', function (message) {
        var messageString = message.utf8Data;
        userIndex.forEach(function (user) {
            user.sendUTF(messageString);
        });
    });
});