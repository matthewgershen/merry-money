import { RECEIVE_STOCK_INFO } from './../actions/company_actions';


const stockInfoReducer = (state = {},action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_STOCK_INFO:
      return action.stockInfo;
    default:
      return state;
  }
};

export default stockInfoReducer;
