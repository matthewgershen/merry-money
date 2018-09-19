import React from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../../actions/news_actions';

class News extends React.Component{
  constructor(props) {
    super(props);

  }

  componentDidMount(){
    this.props.fetchNews(this.props.search);
  }


  render(){
    if (!this.props.news.status) {
      return (<div></div>);
    } else {
    return (
      <div>
        <div className="info-section-header">
          <h2>News</h2>
        </div>
        {this.props.news.articles.map((article,idx)=>{
          return (
          <div key={idx} className="news-block">
            <img src={article.urlToImage}/>
            <div className="news-content">
              <div className="news-source">
                <p>{article.source.name}</p>
                <span>{article.publishedAt}</span>
              </div>
              <p>{article.title}</p>
              <p>{article.description}</p>
            </div>
          </div>
          )
        })}
      </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return{
    news: state.entities.news
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetchNews: (search) => dispatch(fetchNews(search))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);
