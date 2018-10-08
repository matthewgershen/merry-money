export const fetchPortfolioHoldings = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/portfolios'
  });
};

export const fetchAssetShares = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/portfolios/${id}`
  });
};
