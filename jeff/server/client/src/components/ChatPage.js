import React from 'react';

export default () => (
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