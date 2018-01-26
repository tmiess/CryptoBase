import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App1 from './components/charts/chart1/App';
import App2 from './components/charts/chart2/App2';
import App3 from './components/charts/chart3/App3';
import App4 from './components/charts/chart4/App4';
import CcDrop from './components/Dropdown';
import Tabs from './Tabs';


ReactDOM.render(<Tabs />, document.getElementById("root0"));
ReactDOM.render(<App1 />, document.getElementById('root1'));
ReactDOM.render(<App2 />, document.getElementById('root2'));
ReactDOM.render(<App3 />, document.getElementById('root3'));
ReactDOM.render(<App4 />, document.getElementById('root4'));
ReactDOM.render(<CcDrop />, document.getElementById('root5'));

