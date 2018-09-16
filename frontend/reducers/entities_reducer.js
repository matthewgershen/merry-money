import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import stockReducer from './stock_reducer';
import companiesIndexReducer from './companies_index_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  companies: companiesIndexReducer,
  stock: stockReducer
});

export default entitiesReducer;
