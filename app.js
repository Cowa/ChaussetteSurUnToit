var express = require('express');
var http = require('http');
var sio = require('socket.io');

var app = express();
var server = http.createServer(app);
var io = sio.listen(server);
var port = process.env.PORT || 8080;

app
  .use('/js', express.static(__dirname + '/js'))
  .use('/assets', express.static(__dirname + '/assets'))
  .use('/templates', express.static(__dirname + '/templates'))
  .get('/', function(req, res) {
    res.sendfile(__dirname + '/index.html');
  });

io.sockets.on('connection', function(socket) {
  socket.emit('New socket', socket.id);

  socket.on('Hi, I\'m new :)', function() {
    socket.broadcast.emit('Welcome new socket');
  });

  socket.on('disconnect', function() {
    socket.broadcast.emit('Bye bye sockets :(', socket.id);
  });

  socket.on('Here I am', function(hereHeIs) {
    socket.broadcast.emit('Here he is', hereHeIs);
  });
});

server.listen(port);
