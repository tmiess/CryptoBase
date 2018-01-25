import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import btcChart1 from './components/charts/btcApp1';
import btcChart2 from './components/charts/btcApp2';
import CcDrop from './components/Dropdown';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<btcChart2 />, document.getElementById('root2'));
ReactDOM.render(<CcDrop />, document.getElementById('root3'));

