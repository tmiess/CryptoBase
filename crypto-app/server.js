const express = require("express"),
        app = express(),
        server = require('http').Server(app),
        io = require('socket.io')(server),
        PORT = process.env.PORT || 8081;
    let usernames=[]; 
        
app.use(express.static("client/build"));        
server.listen(PORT,() => {
      console.log(`🌎 ==> Server now on port ${PORT}!`);
});


//first route to index.html
//"*" will be changed to the appropriate url path name later
app.get("*",(req,res)=> {
    res.sendFile(__dirname + "/client/src/components/ChatIo/index.html"); //check here if chat doesn't load
});

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

