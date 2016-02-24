/*global require, __dirname, io */
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

server.listen(3000);

app.get('/', function(req,res) {
  res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function(socket){
  socket.on('send', function(data){
    io.sockets.emit('newMessage', data);
  });
});
