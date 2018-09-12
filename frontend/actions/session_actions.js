import * as SessionApiUtil from './../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";


const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user: currentUser
  };
};

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

export const signup = (user) => dispatch => (
  SessionApiUtil.signup(user).then( (user) => dispatch(receiveCurrentUser(user)),
  (err) => {
    dispatch(receiveErrors(err.responseJSON));
    }
  )
);

export const login = (user) => dispatch => (
  SessionApiUtil.login(user).then( (user) => dispatch(receiveCurrentUser(user)),
  (err) => (dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  SessionApiUtil.logout().then( () => dispatch(logoutCurrentUser()))
);
