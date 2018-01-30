import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
// import socket from 'socket.io';

// const sockIo= io(8081);
// const socket = socketIOClient(`https://crypto-forum-majidmu.c9users.io:8081`); //for home
const socket = socketIOClient(`https://localhost:8081`);

class ChatPage extends Component {

  state = {
    username: [],
    value: "",
    comments: [],

  };

  componentDidMount() {
    socket.on('username', (data) => {
      this.setState({
        username: [data, ...this.state.username]
      });
    });

    socket.on("new message", (data) => {
      this.setState({
        comments: [data, ...this.state.comments]

      })
    });
  }
  handleChangee = event => {
    event.preventDefault();
    this.state({
      value: event.target.value
    });
  }

  post = (event) => {
    event.preventDefault();
    socket.emit('new user', this.state.value);
  }

  render() {

    return (
      <div>
      <h1>Chat</h1>
      <div id= "container">
          <div id= "namesWrapper">
              <h2>Crypto Talk</h2>        
              <p>Create UserName:</p>
              <div id="error"></div>
              <form id= "userNameForm">
                 <input type="text" name="" size="35" id="username"/>
                 <input type="submit" value="Submit" />
              </form>
          </div>
          <div id="mainWrapper">
              <h2>Crypto Talk</h2>
              <div id="chatWrapper">
                 <div id="chatWindow"></div>
                  <form id="messageForm">
                      <input type="text" name="" size="35" id="message" placeholder="Lets talk Cryto"/>
                      <input type="submit" value="Submit"/>
                  </form>
              </div>
              <div id="userWrapper">
                  <div id="users"></div>
              </div>
              <div id="myName"></div>
          </div>
      </div>
  </div>
    );
  }

}
export default ChatPage;
