import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_Errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer
});

export default errorsReducer;
