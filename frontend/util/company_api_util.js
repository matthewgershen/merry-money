export const fetchCompany = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/companies/${id}`
  })
}
