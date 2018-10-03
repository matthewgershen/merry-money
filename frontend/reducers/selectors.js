import values from 'lodash/values';

export const selectAllWatchlistMemberships = state => values(state.entities.watchlist);

export const selectAllPortfolioHoldings = state => values(state.entities.holdings);



export const selectCompanies = state => values(state.entities.companies);
