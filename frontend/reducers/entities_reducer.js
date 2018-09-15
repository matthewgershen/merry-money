import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import stockReducer from './stock_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  stock: stockReducer
});

export default entitiesReducer;
