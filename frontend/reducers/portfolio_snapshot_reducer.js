import { RECEIVE_SNAPSHOTS } from './../actions/portfolio_snapshot_actions';


const portfolioSnapshotReducer = (state = [],action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SNAPSHOTS:
      return action.snapshots;
    default:
      return state;
  }
};

export default portfolioSnapshotReducer;
