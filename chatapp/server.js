const http = require('http');
const express = require('express');
const app = express();
const socketServer = http.Server(app);
const socket = require('socket.io');
const io = socket(socketServer);
const PORT = process.env.PORT || 8080;

var messages = [];
var connectedusers = [];
app.use('/', express.static('public'));

io.on('connection', function(sk){
    console.log("connection_established");
   


    sk.on('message', function(data){
   // var input=data.input;
   // console.log(input);
    //var user=data.user;
    //console.log(user);
     //connectedusers=data.user;
     //console.log(connectedusers);
      
     messages.push(data);
     console.log(data);
     io.emit('show', data)
     
    })
 
    sk.emit('ms', messages)
    
  
   
    sk.on('disconnect',function(){
        delete  connectedusers[sk.id];
        console.log(connectedusers);
        console.log("user disconnected");
        sk.on('online_users',function(data){
            connectedusers.push(data)
            
            console.log(data,sk.id);
            connectedusers[sk.id]=data;
            console.log("connected users="  +connectedusers)
            io.emit('users',data,connectedusers)
        })
       // console.log(connectedusers);
        sk.emit('onli',connectedusers)           
       
    })
   
    })
  
  



socketServer.listen(PORT, function(){
    console.log("Server is listening on port "+ PORT);

});