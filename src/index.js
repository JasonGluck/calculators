import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, browserHistory } from 'react-router'
import rootReducer from './ducks/index';
import CreditCard from './components/creditCard/CreditCard';
import App from './components/App';
import './css/skeleton.css';
import './css/index.css';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/creditcard" component={CreditCard} />
      <Route path="/mortgage" component={App} />
      <Route path="/studentloan" component={App} />
      <Route path="/car" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
