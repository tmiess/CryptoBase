import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navpills from "./components/Navpills";
import App1 from "./components/charts/chart1/App";
import CcDrop from "./components/Dropdown";
import Learn from "./components/FAQ";


const Tabs = () =>
  <Router>
    <div>
      <Navpills />
      <Route exact path="/" component={App1} />
      <Route exact path="/talk" component={CcDrop} />
      <Route exact path="/learn" component={Learn} />
    </div>
  </Router>;

export default Tabs;