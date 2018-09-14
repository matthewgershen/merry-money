import { RECEIVE_COMPANY, RECEIVE_CHART, RECEIVE_COMPANY_INFO } from './../actions/company_actions';


const companiesReducer = (state = {},action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMPANY:
      return action.company;
    case RECEIVE_CHART:
      return action.chart;
    case RECEIVE_COMPANY_INFO:
      return action.info;
    default:
      return state;
  }
};

export default companiesReducer;
