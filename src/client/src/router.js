import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, HashRouter} from 'react-router-dom';
import App from './App.js';
import { render } from 'react-dom';

ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('root'))
