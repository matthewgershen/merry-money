import { combineReducers } from 'redux';
import companiesReducer from './companies_reducer';
import chartReducer from './chart_reducer';
import companyInfoReducer from './company_info_reducer';
import quoteReducer from './quote_reducer';
import stockInfoReducer from './stock_info_reducer';

const stockReducer = combineReducers({
  company: companiesReducer,
  stockInfo: stockInfoReducer,
  chart: chartReducer
});

export default stockReducer;
