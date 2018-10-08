import * as PortfolioHoldingsApiUtil from './../util/portfolio_holdings_api_util';

export const RECEIVE_PORTFOLIO_HOLDINGS = "RECEIVE_PORTFOLIO_HOLDINGS";
export const RECEIVE_ASSET_SHARES = "RECEIVE_ASSET_SHARES";


const receivePortfolioHoldings = (portfolio_holdings) => {
  return {
    type: RECEIVE_PORTFOLIO_HOLDINGS,
    portfolio_holdings
  };
};

const receiveAssetShares = (shares) => {
  return {
    type: RECEIVE_ASSET_SHARES,
    shares
  };
};

export const fetchPortfolioHoldings = () => dispatch => {
  PortfolioHoldingsApiUtil.fetchPortfolioHoldings().then((portfolio_holdings) =>
  dispatch(receivePortfolioHoldings(portfolio_holdings)));
};

export const fetchAssetShares = (id) => dispatch => {
  PortfolioHoldingsApiUtil.fetchAssetShares(id).then((shares) =>
  dispatch(receiveAssetShares(shares)));
};
