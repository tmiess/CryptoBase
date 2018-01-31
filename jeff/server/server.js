const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8081;
const app = express(),
      server = require('http').Server(app),
      io = require('socket.io')(server);
  let usernames=[];     

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

//////socket io///////

io.sockets.on("connection", (socket)=>{
    console.log("socket connected");
    
    socket.on("new user", (data,callback)=>{ //logic to make sure the same person can't be logged in
    console.log("data from server.js"+ data);
        if(usernames.indexOf(data) != -1){
            callback(false);
        }else{
            callback(true); // if it is true
            socket.username = data; // then grab the user's data then
            usernames.push(socket.username);//and put it in the usernames array
            updateUsernames();
        }
    });
    
    const updateUsernames = () => {  //obviously this handles updating the username. :D
        // console.log(username)
        io.emit("usernames", usernames);
    };
    socket.on("send message", (data)=>{ //this sends the message
        io.emit("new massage", {msg:data, user:socket.username}); //this catches the message and "emits" the data to client
    });
    
    socket.on("disconnect", (data)=>{
        if(!socket.username){
            return;
        }
        usernames.splice(usernames.indexOf(socket.username), 1);
        updateUsernames();
    });
});