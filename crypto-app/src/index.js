import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Chart1 from './components/charts/Chart1';
import Chart2 from './components/charts/Chart2';
import Chart3 from './components/charts/Chart3';
import Chart4 from './components/charts/Chart4';
import CcDrop from './components/Dropdown';
import Tabs from './Tabs';
// import Menu from './components/Menu';

// ReactDOM.render(<Menu />, document.getElementById('root'));
ReactDOM.render(<Tabs />, document.getElementById('root0'));
ReactDOM.render(<Chart1 />, document.getElementById('root1'));
ReactDOM.render(<Chart2 />, document.getElementById('root2'));
ReactDOM.render(<Chart3 />, document.getElementById('root3'));
ReactDOM.render(<Chart4 />, document.getElementById('root4'));
ReactDOM.render(<CcDrop />, document.getElementById('root5'));