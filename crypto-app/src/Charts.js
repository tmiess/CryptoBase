import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navpills2 from "./components/Navpills2";
import Chart1 from "./components/charts/Chart1";
import Chart2 from "./components/charts/Chart2";
import Chart3 from "./components/charts/Chart3";
import Chart4 from "./components/charts/Chart4";

const Charts= () =>
  <Router>
    <div>
      <Navpills2 />
      <Route exact path="/"/>
      <Route exact path="/BTC" component={Chart1}/>
      <Route exact path="/ETH" component={Chart2}/>
      <Route exact path="/LTC" component={Chart3}/>
      <Route exact path="/42" component={Chart4}/>
    </div>
  </Router>;

export default Charts;