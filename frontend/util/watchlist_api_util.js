export const fetchWatchlistMemberships = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/watchlist_memberships`
  });
};

export const createWatchlistMembership = (company_id) => {
  return $.ajax({
    method: 'POST',
    url: `/api/watchlist_memberships`,
    data: {company_id}
  });
};

export const removeWatchlistMembership = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/watchlist_memberships/${id}`
  });
};
