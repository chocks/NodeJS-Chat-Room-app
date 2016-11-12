//Main entry file for chat room app
/**
 * Author : Chocks Eswaramurthy
 * LICENSE: Apache 2.0
 * Date: 11/12/2106
 * Version: 1.0
 *
 */
var express = require('express'); // Get the module
var app = express(); // Create express by calling the prototype in var express
var path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);

//Load static assets
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/views/index.html');
});

io.on('connection', function(socket){
	socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(9000, function(){
  // console.log('listening on *:9000');
  // console.log(path.join(__dirname, '/public'));
});