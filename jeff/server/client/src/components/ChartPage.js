import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import moment from 'moment';
import './charts/chartTools/App.css';
import LineChart from './charts/chartTools/LineChart';
import ToolTip from './charts/chartTools/ToolTip';
import { Tabs, Tab } from 'react-bootstrap';

import Chart1 from './charts/Chart1';
import Chart2 from './charts/Chart2';
import Chart3 from './charts/Chart3';
import Chart4 from './charts/Chart4';

const ChartPage = () =>
      
<div className='container'>
    <Tabs defaultActiveKey={1} id="price-chart-change">
        <Tab eventKey={1} title="BTC">
          <Route component={Chart1}/>
        </Tab>
        <Tab eventKey={2} title="ETH">
          <Route component={Chart2}/>
        </Tab>
        <Tab eventKey={3} title="LTC">
          <Route component={Chart3}/>
        </Tab>
        <Tab eventKey={4} title="42">
          <Route component={Chart4}/>
        </Tab>
    </Tabs>;
</div>

export default ChartPage;