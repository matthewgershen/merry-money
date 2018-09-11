import * as SessionApiUtil from './../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";


const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
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

export const signup = (user) => dispatch => (
  SessionApiUtil.signup(user).then( (user) => dispatch(signup(user)))
);

export const login = (user) => dispatch => (
  SessionApiUtil.login(user).then( (user) => dispatch(login(user)))
);

export const logout = () => dispatch => (
  SessionApiUtil.logout().then( () => dispatch(logout()))
);
