import { UPDATE_COLOR } from './../actions/ui_actions';


const uiReducer = (state = "",action) => {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_COLOR:
      return action.color;
    default:
      return state;
  }
};

export default uiReducer;
