import React from 'react';
// import boostrap, {FormControl} from "react-bootstrap";
import socketIOClient from 'socket.io-client';
// import socket from 'socket.io';

// const sockIo= io(8081);
// const socket = socketIOClient(`http://localhost:3001`); //for home
// const socket = socketIOClient(`https://localhost:8081`);

class ChatPage extends React.Component {
  constructor() {
    super();

  this.state = {
    username: "",
    message: "",
    users: [],
    messages: []
      }
  this.handleChange = this.handleChange.bind(this);
  console.log(this) 
  // this.handleSubmit = this.handleSubmit.bind(this);
  // this.socket= socketIOClient('http://localhost:3002')

}
  componentDidMount() {
    // this.socket.on('new user', (data) => {
      const {username} = this.state;
      const socket = socketIOClient('http://localhost:3002');
      socket.on('new message', (data) => this.setState({ username:data }));
      // this.setState({
      //   users: [...data, this.state.username]
      // });
    // });

  //   this.socket.on('new message', (data) => {
  //     this.setState({
  //       messages: [...data, this.state.messages]
  //     });
  //   });
  }
  
  handleChange = (event) => {
    console.log(event.target.name);
    const { name, value } = event;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    // alert("hell yeah")   
    this.socket.emit('new user', this.state.username);
    event.preventDefault();
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
                    <label>                  
                       <input type="text" size="35" id="username" value={this.state.username} onChange={this.handleChange}/>
                      </label>
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
                                        
                  </div>
                  <div id="userWrapper">
                      <div id="users"></div>
                  </div>
                  <div id="myName"></div>
              </div>
          </div>
      </div>
    )
  }
}

export default ChatPage;
