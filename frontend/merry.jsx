import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchCompany } from './util/company_api_util.js'

import { login, signup, logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
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
window.fetchCompany = fetchCompany;
// testing
