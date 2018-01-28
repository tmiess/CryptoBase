import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navpills from "./components/Navpills";
import Chart1 from "./components/charts/Chart1";
import Chart2 from "./components/charts/Chart2";
import Chart3 from "./components/charts/Chart3";
import Chart4 from "./components/charts/Chart4";
import CcDrop from "./components/Dropdown";
import Learn from "./components/FAQ";


const Tabs = () =>
  <Router>
    <div>
      <Navpills />
      <Route exact path="/"/>
      <Route exact path="/BTC" component={Chart1}/>
      <Route exact path="/ETH" component={Chart2}/>
      <Route exact path="/LTC" component={Chart3}/>
      <Route exact path="/42" component={Chart4}/>
      <Route exact path="/talk" component={CcDrop}/>
      <Route exact path="/learn" component={Learn}/>
    </div>
  </Router>;

export default Tabs;