import React from 'react';
// import boostrap, {FormControl} from "react-bootstrap";
// import socketIOClient from 'socket.io-client';
import socket from 'socket.io-client'
// import socket from 'socket.io';

// const sockIo= io(8081);
// const socket = socketIOClient(`http://localhost:3001`); //for home
// const socket = socketIOClient(`https://localhost:8081`);

class ChatPage extends React.Component {
  constructor(props) {
    super(props);

  this.state = {
    value: "",
    message: "",
    // users: [],
    // messages: []
      }
  this.handleChange = this.handleChange.bind(this);
  // console.log(this) 
  this.handleSubmit = this.handleSubmit.bind(this);
  // this.socket= socketIOClient('http://localhost:3002')
  this._handleMessageEvent = this._handleMessageEvent.bind(this)

}
  componentDidMount() {
    // this.socket.on('new user', (data) => {
      // const {value} = this.state;
      // const socket = socketIOClient('http://localhost:3001');
      // socket.on('new message', (data) => this.setState({ username:data }));
      // console.log("this is your client socket speaking ")
     this._handleMessageEvent()
  }
  
  _handleMessageEvent(){
       socket.on('chat message', (inboundMessage) => {
         this.props.newMessage({user: 'test_user', message: inboundMessage})
          })
       }

  
  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    console.log("this is the event " + event)
    event.preventDefault();
    socket.emit("new user", {message: this.state.value})  
    // this.socket.emit(event.target.value);
    // let username = this.socket.emit(this.state.value)
    this.setState({ value: ""})

    console.log("What's happening MOFO")

    
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
                       <input type="text" size="35" id="username" value={this.state.value} onChange={this.handleChange}/>
                      </label>
                      <input type="submit" value="Submit" />                    
                    </form>
              </div>
              <div id="mainWrapper">
                  <h2>Crypto Talk</h2>
                    <div id="chatWrapper">
                     <div id="chatWindow">
                       {this.state.message.map(message => {
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
