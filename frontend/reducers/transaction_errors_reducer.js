import { RECEIVE_TRANSACTION_ERRORS, RECEIVE_TRANSACTION } from './../actions/transaction_actions';
import { CLEAR_ERRORS } from './../actions/session_actions'

const transactionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRANSACTION:
      return [];
    case CLEAR_ERRORS:
      return [];
    case RECEIVE_TRANSACTION_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default transactionErrorsReducer;
