export const fetchCompany = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/companies/${id}`
  });
};

export const fetchChart = (symbol, range) => {
  return $.ajax({
    method:'GET',
    url: `https://api.iextrading.com/1.0/stock/${symbol}/chart/${range}`,
    dataType: 'jsonp'
  });
};

export const fetchCompanyInfo = (symbol) => {
  return $.ajax({
    method: 'GET',
    url:`https://api.iextrading.com/1.0/stock/${symbol}/company`,
    dataType: 'jsonp'
  });
};

export const fetchQuote = (symbol) => {
  return $.ajax({
    method: 'GET',
    url:`https://api.iextrading.com/1.0/stock/${symbol}/quote`,
    dataType: 'jsonp'
  });
};

export const fetchStockInfo = (symbol) => {
  return $.ajax({
    method: 'GET',
    url:`https://api.iextrading.com/1.0/stock/${symbol}/batch?types=quote,company`,
    dataType: 'jsonp'
  });
};
