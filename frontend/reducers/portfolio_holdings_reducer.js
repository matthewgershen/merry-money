import { RECEIVE_PORTFOLIO_HOLDINGS } from './../actions/portfolio_holdings_actions';
import { merge } from 'lodash';


const portfolioHoldingsReducer = (state = {},action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PORTFOLIO_HOLDINGS:
    if (Object.keys(action.portfolio_holdings).length === 0) {
      return ["No portfolio holdings"];
    } else {
      return merge({}, state, action.portfolio_holdings);
    }
    default:
      return state;
  }
};

export default portfolioHoldingsReducer;
