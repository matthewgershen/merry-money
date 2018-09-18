import * as TransactionApiUtil from './../util/transaction_api_util';

export const RECEIVE_TRANSACTION = "RECEIVE_TRANSACTION";
export const RECEIVE_TRANSACTION_ERRORS = "RECEIVE_TRANSACTION_ERRORS";

const receiveTransaction= (transaction) => {
  return {
    type: RECEIVE_TRANSACTION,
    transaction
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_TRANSACTION_ERRORS,
    errors
  };
};

export const createTransaction = (transaction) => dispatch => (
  TransactionApiUtil.createTransaction(transaction).then((transaction) =>
  dispatch(receiveTransaction(transaction)), (err) => (dispatch(receiveErrors(err.responseJSON))
  ))
);
