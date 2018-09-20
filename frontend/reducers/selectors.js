import values from 'lodash/values';

export const selectAllWatchlistMemberships = state => values(state.entities.watchlist);


export const selectCompanies = state => values(state.entities.companies);
