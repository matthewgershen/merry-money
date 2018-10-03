import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import stockReducer from './stock_reducer';
import companiesIndexReducer from './companies_index_reducer';
import watchlistReducer from './watchlist_reducer';
import transactionReducer from './transaction_reducer';
import portfolioSnapshotReducer from './portfolio_snapshot_reducer';
import newsReducer from './news_reducer';
import portfolioHoldingsReducer from './portfolio_holdings_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  companies: companiesIndexReducer,
  stock: stockReducer,
  watchlist: watchlistReducer,
  transaction: transactionReducer,
  snapshots: portfolioSnapshotReducer,
  news: newsReducer,
  portfolio_holdings: portfolioHoldingsReducer
});

export default entitiesReducer;
