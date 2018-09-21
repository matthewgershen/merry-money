import { RECEIVE_ALL_COMPANIES,RECEIVE_COMPANY } from './../actions/company_actions';
import { merge } from 'lodash';
import { RECEIVE_WATCHLIST } from './../actions/watchlist_memberships_actions';


const companiesIndexReducer = (state = {},action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_COMPANIES:
      return merge({}, state, action.companies);
    case RECEIVE_COMPANY:
      return merge({}, state, {[action.company.id]:action.company});
    case RECEIVE_WATCHLIST:
        return action.companies;
    default:
      return state;
  }
};

export default companiesIndexReducer;
