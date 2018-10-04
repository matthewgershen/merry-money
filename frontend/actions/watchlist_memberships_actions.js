import * as WatchlistApiUtil from './../util/watchlist_api_util';

export const RECEIVE_WATCHLIST = "RECEIVE_WATCHLIST";
export const RECEIVE_WATCHLIST_MEMBERSHIP = "CREATE_WATCHLIST_MEMBERSHIP";
export const DELETE_WATCHLIST_MEMBERSHIP = "REMOVE_WATCHLIST_MEMBERSHIP";


const receiveWatchlist= ({watchlist,companies}) => {
  return {
    type: RECEIVE_WATCHLIST,
    watchlist,
    companies
  };
};

const receiveWatchlistMembership = (watchlist_membership) => {
  return {
    type: RECEIVE_WATCHLIST_MEMBERSHIP,
    watchlist_membership
  };
};

const deleteWatchlistMembership = (watchlist_membership) => {
  return {
    type: DELETE_WATCHLIST_MEMBERSHIP,
    watchlist_membership
  };
};

export const fetchWatchlistMemberships = () => dispatch => (
  WatchlistApiUtil.fetchWatchlistMemberships().then((payload) => {
    dispatch(receiveWatchlist(payload));
  })
);

export const createWatchlistMembership = (company_id) => dispatch => (
  WatchlistApiUtil.createWatchlistMembership(company_id).then((watchlist_membership) =>
  dispatch(receiveWatchlistMembership(watchlist_membership)))
);

export const removeWatchlistMembership = (id) => dispatch => (
  WatchlistApiUtil.removeWatchlistMembership(id).then((watchlist_membership) =>
  dispatch(deleteWatchlistMembership(watchlist_membership)))
);
