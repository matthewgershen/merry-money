import { RECEIVE_PORTFOLIO_HOLDINGS, RECEIVE_ASSET_SHARES } from './../actions/portfolio_holdings_actions';
import { RECEIVE_TRANSACTION } from './../actions/transaction_actions';
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
    case RECEIVE_ASSET_SHARES:
    if (action.shares.shares) {
      const newHolding = merge( {}, state[action.shares.id]);
      newHolding.shares = action.shares.shares;
      return merge({}, state, {[action.shares.id]:newHolding});
    } else {
      return state
    }
    case RECEIVE_TRANSACTION:
    if (action.transaction.shares) {
      const newShares = merge( {}, state[action.transaction.company_id]);
      if (!action.transaction.portfolioHoldings[action.transaction.company_id]) {
        newShares.shares = 0;
      } else {
        newShares.shares = action.transaction.portfolioHoldings[action.transaction.company_id];
      }
      return merge({}, state, {[action.transaction.company_id]:newShares});
    } else {
      return state
    }
    default:
      return state;
  }
};

export default portfolioHoldingsReducer;
