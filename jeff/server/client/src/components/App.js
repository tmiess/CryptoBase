import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Grid, Row, Col, Navbar, NavItem, Nav, Jumbotron, Button } from 'react-bootstrap';
// import socketIOClient from 'socket.io-Client';
import './App.css';

import HomePage from './HomePage';
import ChartPage from './ChartPage';
import FaqPage from './FaqPage';
import ChatPage from './ChatPage';
import Charts from './Sidebar';
import CcDrop from './Dropdown';

import Chart1 from "./charts/SideChart1";
import Chart2 from "./charts/SideChart2";
import Chart3 from "./charts/SideChart3";
import Chart4 from "./charts/SideChart4";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <Link id="logo" to="/">CryptoBase</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer id="tabs" to="/chart">
                <NavItem eventKey={1}>
                  SEE
                </NavItem>
              </LinkContainer>
              <LinkContainer id="tabs" to="/faq">
                <NavItem eventKey={2}>
                  LEARN
                </NavItem>
              </LinkContainer>
              <LinkContainer id="tabs" to="/chat">
                <NavItem eventKey={3}>
                  TALK
                </NavItem>
              </LinkContainer>
            </Nav>
            <CcDrop/>
          </Navbar.Collapse>
        </Navbar>
        
        <Grid>
          <Row>
            <Col xs={12} md={10}>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/chart" component={ChartPage} />
              <Route exact path="/faq" component={FaqPage} />
              <Route exact path="/chat" component={ChatPage} />
            </Col>
            <Col xs={6} md={2} lgOffset>
              <h3 id="charts">Live Charts</h3>
              <Chart1 />
              <Chart2 />
              <Chart3 />
              <Chart4 />
            </Col>
          </Row>
        </Grid>
        
      </div>
    );
  }
}

export default App;
