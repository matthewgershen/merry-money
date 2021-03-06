import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchCompany, fetchChart, fetchCompanyInfo } from './actions/company_actions.js'
import { fetchWatchlistMemberships, createWatchlistMembership, removeWatchlistMembership } from './actions/watchlist_memberships_actions';
import { login, signup, logout } from './actions/session_actions';
import { createTransaction } from './actions/transaction_actions';
import { updateColor } from './actions/ui_actions';
import { fetchSnapshots } from './actions/portfolio_snapshot_actions'
import { fetchNews } from './actions/news_actions'
import { fetchPortfolioHoldings } from './actions/portfolio_holdings_actions'



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
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
