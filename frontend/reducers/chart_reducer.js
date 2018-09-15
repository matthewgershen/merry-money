import { RECEIVE_CHART } from './../actions/company_actions';


const chartReducer = (state = {},action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHART:
      return action.chart;
    default:
      return state;
  }
};

export default chartReducer;
