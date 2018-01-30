import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Grid, Navbar, NavItem, Nav, Jumbotron, Button } from 'react-bootstrap';
import './App.css';

import HomePage from './HomePage';
import ChartPage from './ChartPage';
import FaqPage from './FaqPage';
import ChatPage from './ChatPage';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">CryptoApp</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Nav>
              <LinkContainer to="/chart">
                <NavItem eventKey={1}>
                  Chart
                </NavItem>
              </LinkContainer>
              <LinkContainer to="/faq">
                <NavItem eventKey={2}>
                  FAQs
                </NavItem>
              </LinkContainer>
              <LinkContainer to="/chat">
                <NavItem eventKey={3}>
                  Chat
                </NavItem>
              </LinkContainer>
            </Nav>
          </Grid>
        </Navbar>
        
        <Route exact path="/" component={HomePage} />
        <Route exact path="/chart" component={ChartPage} />
        <Route exact path="/faq" component={FaqPage} />
        <Route exact path="/chat" component={ChatPage} />
      </div>
    );
  }
}

export default App;
