import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import stockReducer from './stock_reducer';
import companiesIndexReducer from './companies_index_reducer';
import watchlistReducer from './watchlist_reducer';
import transactionReducer from './transaction_reducer';
import portfolioSnapshotReducer from './portfolio_snapshot_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  companies: companiesIndexReducer,
  stock: stockReducer,
  watchlist: watchlistReducer,
  transaction: transactionReducer,
  snapshots: portfolioSnapshotReducer
});

export default entitiesReducer;
