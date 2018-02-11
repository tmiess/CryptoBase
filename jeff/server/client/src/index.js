import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import App from './components/App';
// import io from socket.io;
import socketIOClient from 'socket.io';

ReactDOM.render(
    <Router><App /></Router>,
    document.getElementById('root')
);
