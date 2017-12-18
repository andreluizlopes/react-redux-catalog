import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import AppCart from './AppCart';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import registerServiceWorker from './registerServiceWorker';
import './assets/css/main.css';

const store = configureStore();
const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <Router>
        <div>
          <Route exact path="/" component={App} />
          <Route path="/cart" component={AppCart} />
        </div>
    </Router>
  </Provider>,
  target
);

registerServiceWorker();
