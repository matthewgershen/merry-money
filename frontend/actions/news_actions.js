import * as NewsApiUtil from './../util/news_api_util';

export const RECEIVE_NEWS = "RECEIVE_NEWS";

const receiveNews = (news) => {
  return {
    type:RECEIVE_NEWS,
    news
  };
};

export const fetchNews = (search) => dispatch => (
  NewsApiUtil.fetchNews(search).then((news) =>
  dispatch(receiveNews(news)))
);
