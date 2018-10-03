export const fetchPortfolioHoldings = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/portfolios'
  });
};
