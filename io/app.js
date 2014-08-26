var express = require('express'),
    http    = require('http'),
    sio     = require('socket.io');

var app     = express(),
    server  = http.createServer(app),
    io      = sio.listen(server),
    port    = 8080;

app
.use('/js', express.static(__dirname + '/js'))
.use('/assets', express.static(__dirname + '/assets'))
.get('/', function(req, res) {
	res.sendfile(__dirname + '/index.html');
})

io.sockets.on('connection', function(socket) {
	socket.emit('New socket !', socket.id);

	socket.on('Here I am', function(hereHeIs) {
		//console.log(hereHeIs);
		socket.broadcast.emit('Here he is', hereHeIs);
	});
});

server.listen(port);
