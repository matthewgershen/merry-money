import { RECEIVE_CURRENT_USER,LOGOUT_CURRENT_USER } from './../actions/session_actions';
import { RECEIVE_TRANSACTION } from './../actions/transaction_actions';
import merge from 'lodash/merge';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {[action.user.id]: action.user });
    case RECEIVE_TRANSACTION:
      const newUser = merge( {}, state[action.transaction.user_id]);
      newUser.buyingPower = action.transaction.buyingPower;
      newUser.portfolioHoldings = action.transaction.portfolioHoldings;
      return {[action.transaction.user_id]: newUser};
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default usersReducer;
