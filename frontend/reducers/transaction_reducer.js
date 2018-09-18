import { RECEIVE_TRANSACTION } from './../actions/transaction_actions';


const transactionReducer = (state = {},action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRANSACTION:
      return action.transaction;
    default:
      return state;
  }
};

export default transactionReducer;
