import { RECEIVE_COMPANY_INFO } from './../actions/company_actions';


const companyInfoReducer = (state = {},action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMPANY_INFO:
      return action.info;
    default:
      return state;
  }
};

export default companyInfoReducer;
