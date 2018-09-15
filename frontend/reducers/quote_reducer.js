import { RECEIVE_QUOTE } from './../actions/company_actions';


const quoteReducer = (state = {},action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_QUOTE:
      return action.quote;
    default:
      return state;
  }
};

export default quoteReducer;
