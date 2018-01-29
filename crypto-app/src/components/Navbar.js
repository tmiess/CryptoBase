import React from "react";
import { Link } from "react-router-dom";
import { DropdownButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';

const Navbar = () =>

<div>
  <ul className="nav nav-tabs right" class="nav justify-content-end">
    <li class="nav-item" class={window.location.pathname === "/" ? "active" : ""}>
      <Link to="/">Home</Link>
    </li>
    <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
          
    </li>
      <DropdownButton className="dropdown-menu" onSelect={event => this.setType(event.target.eventKey)}>
        <MenuItem eventKey="">All Types</MenuItem>
        <MenuItem eventKey="OMOD">Module (OMOD)</MenuItem>
        <MenuItem eventKey="OWA">Open Web App (OWA)</MenuItem>
      </DropdownButton>
    <li class="dropdown">
      <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Charts<span class="caret"></span></a>
      <ul id="charts" class="dropdown-menu">
        <li class="nav-item" class={window.location.pathname === "/BTC" ? "active" : ""}>
          <Link to="/BTC">Bitcoin</Link>
        </li>
        <li class="nav-item" class={window.location.pathname === "/ETH" ? "active" : ""}>
          <Link to="/ETH">Ethereum</Link>
        </li>
        <li class="nav-item" class={window.location.pathname === "/LTC" ? "active" : ""}>
          <Link to="/LTC">Litecoin</Link>
        </li>
        <li class="nav-item" class={window.location.pathname === "/42" ? "active" : ""}>
          <Link to="/42">42</Link>
        </li>
      </ul>
    </li>
    <li class="nav-item" class={window.location.pathname === "/talk" ? "active" : ""}>
      <Link to="/talk">Talk</Link>
    </li>
    <li class="nav-item" class={window.location.pathname === "/learn" ? "active" : ""}>
      <Link to="/learn">Learn</Link>
    </li>
  </ul>
  
</div>;

export default Navbar;