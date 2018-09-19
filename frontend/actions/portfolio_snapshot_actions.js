import * as PortfolioSnapshotApiUtil from './../util/portfolio_snapshot_api_util';

export const RECEIVE_SNAPSHOTS = "RECEIVE_SNAPSHOTS";

const receiveSnapshots = (snapshots) => {
  return {
    type:RECEIVE_SNAPSHOTS,
    snapshots
  };
};

export const fetchSnapshots = () => dispatch => (
  PortfolioSnapshotApiUtil.fetchSnapshots().then((snapshots) =>
  dispatch(receiveSnapshots(snapshots)))
);
