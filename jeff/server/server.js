const express = require("express");
const logger = require("morgan");
const path = require("path");

// const PORT = process.env.PORT || 3001 || 3002 || 3003;
const PORT = 3001
const app = express(),
    server = require('http').Server(app),
    io = require('socket.io')(server);
let usernames = [];

app.use(logger("dev"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
    res.sendFile(__dirname + "./client/src/components/ChatPage.js"); //check here if chat doesn't load
});
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "/client/build/index.html"));
// });

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// app.get("*", (req, res) => {
//     res.sendFile(__dirname + "/client/src/components/ChatPage.js"); //check here if chat doesn't load
// });

server.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
});



//////socket io///////

io.sockets.on("connection", (socket)=>{
    console.log("socket connected " + socket[{}]);
    
    socket.on("new user", (data,callback)=>{ //logic to make sure the same person can't be logged in
    // console.log("data from server.js "+ callback);
        if(usernames.indexOf(data) != -1){
            callback(false);
        } if (usernames.indexOf(data) != -1){
            console.log("Party time " + data)
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
