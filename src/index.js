// Babel can't transpile certain features. For those we need a pollyfill
// We could choose individual components to pollyfill to get a smaller file size
import 'babel-polyfill';

import React from 'react';

// react-dom was split off from React in version 1.4
import { render } from 'react-dom';

// browserHistory will give us nice clean (hashless) urls
import { Router, browserHistory } from 'react-router';

import routes from './routes';

// Webpack will bundle these files for us
import './styles/styles.css';  // Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render (
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
