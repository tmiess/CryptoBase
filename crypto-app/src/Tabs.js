import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navpills from "./components/Navpills";
import CcDrop from "./components/Dropdown";
import Learn from "./components/FAQ";


const Tabs = () =>
  <Router>
    <div>
      <Navpills />
      <Route exact path="/"/>
      <Route exact path="/talk" component={CcDrop}/>
      <Route exact path="/learn" component={Learn}/>
    </div>
  </Router>;

export default Tabs;