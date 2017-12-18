import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import AppCart from './AppCart';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import './assets/css/main.css';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);
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
