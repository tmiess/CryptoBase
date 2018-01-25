import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
// import btcChart1 from './components/charts/btcApp1';
import btcChart2 from './components/charts/btcApp2';
import CcDrop from './components/Dropdown';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<App2 />, document.getElementById('root2'));
ReactDOM.render(<App3 />, document.getElementById('root3'));
ReactDOM.render(<App4 />, document.getElementById('root4'));
ReactDOM.render(<CcDrop />, document.getElementById('root5'));

