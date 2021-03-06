import React from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../../actions/news_actions';
import { convertDate } from './../../util/date_util';

class News extends React.Component{
  constructor(props) {
    super(props);

  }

  componentDidMount(){
    this.props.fetchNews(this.props.search);
  }

  componentWillReceiveProps(nextProps) {

    if (this.props.search !== nextProps.search) {
      this.props.fetchNews(nextProps.search);
    }
  }

  render(){
    if (!this.props.news.status) {
      return (<div></div>);
    } else {
    return (
      <div>
        <div className="info-section-header">
          <h2>Recent News</h2>
        </div>
        {this.props.news.articles.map((article,idx)=>{
          return (

            <a key={idx} href={article.url} >
              <div className="news-block" >
                <img src={article.urlToImage} onError={(e)=>{e.target.onerror = null; e.target.src=window.logo_url}}/>
                <div className="news-content">
                  <div className="news-source">
                    <p>{article.source.name}</p>
                    <span>{convertDate(article.publishedAt)}</span>
                  </div>
                  <p className="title">{article.title}</p>
                  <p>{article.description}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    );
    }
  }
}

const mapStateToProps = (state) => {
  return{
    news: state.entities.news
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    fetchNews: (search) => dispatch(fetchNews(search))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);
