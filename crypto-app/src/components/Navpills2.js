import React from "react";
import { Link } from "react-router-dom";

const Navpills2 = () =>

<div>
  <ul className="nav nav-tabs">
    <li className={window.location.pathname === "/BTC" ? "active" : ""}>
      <Link to="/BTC">Bitcoin</Link>
    </li>
    <li className={window.location.pathname === "/ETH" ? "active" : ""}>
      <Link to="/ETH">Ethereum</Link>
    </li>
    <li className={window.location.pathname === "/LTC" ? "active" : ""}>
      <Link to="/LTC">Litecoin</Link>
    </li>
    <li className={window.location.pathname === "/42" ? "active" : ""}>
      <Link to="/42">42</Link>
    </li>
  </ul>
</div>;

export default Navpills2;