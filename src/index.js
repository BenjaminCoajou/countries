import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/styles/index.css'

import App from './containers/App';

import store from './store';

const rootComponent = (
  
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
 
);

const traget = document.getElementById('root');

render(rootComponent, traget);

