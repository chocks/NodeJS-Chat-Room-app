//Main entry file for chat room app
/**
 * Author : Chocks Eswaramurthy
 * LICENSE: Apache 2.0
 * Date: 11/12/2106
 * Version: 1.0
 *
 */

var express = require('express');
var app = express();
var path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require('fs');
var redis = require('socket.io-redis'); // redis-server needs to be running
io.adapter(redis({ host: 'localhost', port: 6379 })); // Point to running redis-server instance
var port = 9000; // Each node gets its own port

var censorList;
fs.readFile('../helper/censor-list.json', 'utf8', function (err, data) {
  if (err) throw err;
  censorList = JSON.parse(data);
});

//Load static assets
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/views/index.html');
});

io.on('connection', function(socket){
	socket.on('chat message', function(user, msg){
		var foundCensored = false;
		var msgs = msg.split(" ");
		for(i = 0; i < msgs.length; i++) {
		    if(censorList.indexOf(msgs[i]) != -1) {
		    	console.log(msgs[i] + " -- censored word, skipping message...");
		    	foundCensored = true;
		    	break;
		    }
	};
	if(foundCensored == false) {
		io.emit('chat message', user, msg);
	}
  });
});


http.listen(port, function(){
	console.log('Chat server started: listening on *:9000');
});