import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import { login, signup, logout } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  // testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // testing
  const root = document.getElementById('root');
  ReactDOM.render(<h1 store={store}>welcome to my full stack</h1>, root);
});

// testing
window.login = login;
window.signup = signup;
window.logout = logout;
// testing
