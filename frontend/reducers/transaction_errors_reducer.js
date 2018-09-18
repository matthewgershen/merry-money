import { RECEIVE_TRANSACTION_ERRORS, RECEIVE_TRANSACTION } from './../actions/transaction_actions';

const transactionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRANSACTION:
      return [];
    case RECEIVE_TRANSACTION_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default transactionErrorsReducer;
