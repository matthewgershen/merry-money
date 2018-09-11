import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { login, signup, logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  // testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // testing
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});

// testing
window.login = login;
window.signup = signup;
window.logout = logout;
// testing
