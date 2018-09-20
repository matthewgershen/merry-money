import { RECEIVE_COMPANY, RECEIVE_CHART, RECEIVE_COMPANY_INFO } from './../actions/company_actions';
import {RECEIVE_WATCHLIST} from './../actions/watchlist_memberships_actions';
import {merge} from 'lodash';

const companiesReducer = (state = {},action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMPANY:
      return action.company;
    default:
      return state;
  }
};

export default companiesReducer;
