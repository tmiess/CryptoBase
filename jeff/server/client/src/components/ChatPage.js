import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
// import socket from 'socket.io';

// const sockIo= io(8081);
const socket = socketIOClient(`https://crypto-forum-majidmu.c9users.io:8081`); //for home
// const socket = socketIOClient(`https://localhost:8081`);

class ChatPage extends Component {

  state = {
    username: "",
    message: "",
    users: [],
    messages: []
  };

  componentDidMount() {
    socket.on('new user', (data) => {
      this.setState({
        users: [...data, this.state.username]
      });
    });

    socket.on('new message', (data) => {
      this.setState({
        messages: [...data, this.state.messages]
      });
    });
  }
  
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    socket.emit('new user', this.state.username);
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
                    <form id= "userNameForm" onSubmit={this.handleSubmit}>
                       <input type="text" name="username" size="35" id="username" value={this.state.username} onChange={this.handleChange}/>
                      <input type="submit" value="Submit" />
                    </form>
              </div>
              <div id="mainWrapper">
                  <h2>Crypto Talk</h2>
                    <div id="chatWrapper">
                     <div id="chatWindow">
                       {this.state.messages.map(message => {
                          return (<div>{message.username}: {message.message}</div>);
                        })}
                     </div>
                      <form id="messageForm">
                          <input type="text" name="message" size="35" id="message" value={this.state.message} onChange={this.handleChange} placeholder="Lets talk Cryto" />
                          <input type="submit" value="Submit" />
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
