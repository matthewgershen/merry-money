import { RECEIVE_WATCHLIST,RECEIVE_WATCHLIST_MEMBERSHIP,DELETE_WATCHLIST_MEMBERSHIP } from './../actions/watchlist_memberships_actions';
import { LOGOUT_CURRENT_USER } from './../actions/session_actions';
import merge from 'lodash/merge';

const watchlistReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_WATCHLIST:
      return action.watchlist;
    case RECEIVE_WATCHLIST_MEMBERSHIP:
      return merge({}, state, {[action.watchlist_membership.id]: action.watchlist_membership });
    case DELETE_WATCHLIST_MEMBERSHIP:
      let newState = merge({}, state);
      delete newState[action.watchlist_membership.id];
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default watchlistReducer;
