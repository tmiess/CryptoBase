import React from "react";
import { Link } from "react-router-dom";
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import RouterNavItem from './RouterDropdown';
const Navpills2 = () =>

<div>
    
      <Navbar.Collapse>
      
          <NavDropdown eventKey={1} title="Charts" id="basic-nav-dropdown">
            <RouterNavItem eventKey={1.1} to="/BTC">Bitcoin</RouterNavItem>
            <RouterNavItem eventKey={1.2} to="/ETH">Ethereum</RouterNavItem>
            <RouterNavItem eventKey={1.3} to="/LTC">Litecoin</RouterNavItem>
            <RouterNavItem eventKey={1.4} to="/42">42</RouterNavItem>
          </NavDropdown>
          
      </Navbar.Collapse>
      
</div>;

export default Navpills2;