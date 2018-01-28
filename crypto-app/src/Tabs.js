import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navpills from "./components/Navpills";
import App1 from "./components/charts/chart1/App";
import App2 from "./components/charts/chart2/App2";
import App3 from "./components/charts/chart3/App3";
import App4 from "./components/charts/chart4/App4";
import CcDrop from "./components/Dropdown";
import Learn from "./components/FAQ";


const Tabs = () =>
  <Router>
    <div>
      <Navpills />
      <Route exact path="/"/>
      <Route exact path="/BTC" component={App1}/>
      <Route exact path="/ETH" component={App2}/>
      <Route exact path="/LTC" component={App3}/>
      <Route exact path="/42" component={App4}/>
      <Route exact path="/talk" component={CcDrop} />
      <Route exact path="/learn" component={Learn} />
    </div>
  </Router>;

export default Tabs;