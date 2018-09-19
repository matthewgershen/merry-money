export const fetchSnapshots = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/portfolio_snapshots'
  });
};
