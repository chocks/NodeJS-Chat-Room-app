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
var fs = require('fs');
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

http.listen(9000, function(){
	console.log('Chat server started: listening on *:9000');
});