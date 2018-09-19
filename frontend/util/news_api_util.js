
export const fetchNews = (search) => {
  return $.ajax({
    method: 'GET',
    url:`https://newsapi.org/v2/everything?q=${search}&apiKey=4c4f94d3579747beac69ba477b017133`
  });
};
