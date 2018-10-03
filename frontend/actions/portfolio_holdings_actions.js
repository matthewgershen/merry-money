import * as PortfolioHoldingsApiUtil from './../util/portfolio_holdings_api_util';

export const RECEIVE_PORTFOLIO_HOLDINGS = "RECEIVE_PORTFOLIO_HOLDINGS";


const receivePortfolioHoldings = (portfolio_holdings) => {
  return {
    type: RECEIVE_PORTFOLIO_HOLDINGS,
    portfolio_holdings
  };
};

export const fetchPortfolioHoldings = () => dispatch => {
  PortfolioHoldingsApiUtil.fetchPortfolioHoldings().then((portfolio_holdings) =>
  dispatch(receivePortfolioHoldings(portfolio_holdings)));
};
