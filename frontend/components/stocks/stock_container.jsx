import { connect } from 'react-redux';
import { fetchCompany, fetchChart, fetchStockInfo, fetchCompanyInfo, fetchQuote } from './../../actions/company_actions';
import React from 'react';
import CompanyInfo from './info';
import Chart from './chart';
import WatchlistButton from './watchlist_button';
import { updateColor } from './../../actions/ui_actions'
import News from './../news/news'


class Stock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      range: '1y',
      rangeShow: "Past Year"
    };
    this.handleChartClick = this.handleChartClick.bind(this)
  }

  componentDidMount(){
    this.props.fetchCompany(this.props.id).then(action =>
      this.props.fetchStockInfo(action.company.symbol))
      .then(action => {
        return this.props.fetchChart(action.stockInfo.company.symbol,"1y")
      });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.fetchCompany(nextProps.id).then(action =>
        this.props.fetchStockInfo(action.company.symbol))
        .then(action => {
          return this.props.fetchChart(action.stockInfo.company.symbol,"1y")
        });
    }
  }

  componentDidUpdate(previousProps){
    if (!!this.props.stock.chart[0]) {
      const data = this.props.stock.chart
      const first = data[0].close
      const last = data[data.length - 1].close
      const stroke = (last > first) ? "#21ce99" : "#f45531";
      if (stroke !== this.props.color){
        this.props.updateColor(stroke)
      }
    }
  }

  handleChartClick(event,range, rangeShow){
    this.props.fetchChart(this.props.stock.company.symbol,range)
    this.setState({range: range, rangeShow: rangeShow});
    $('button').toggleClass('active').siblings('button').removeClass('active')
  }

  render(){
      const color = this.props.color
      const bColor = color === "#21ce99" ? "rgb(33,206,153, .15)" : "rgb(244,85,49, .15)"


      if (!this.props.stock.chart[0] || (this.props.color === "")  ) {
        return (<div></div>);
      } else {
        return(
        <div className="show-wrapper">
          <div className="stock-wrapper">
            <ul className="tags">
            {this.props.stock.stockInfo.company.tags.map((tag,idx)=>{
              return (
                <li style={{color: color,backgroundColor:bColor}} className="tag" key={idx}>{tag}</li>
              )
            })}
            </ul>
            <h1>{this.props.stock.company.name}</h1>
            <h1>{this.props.stock.stockInfo.quote.latestPrice.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</h1>
            <Chart data={this.props.stock.chart} rangeShow={this.state.rangeShow} color={this.props.color} updateColor={this.props.updateColor}/>
            <div className="chart-ranges">
              <button onClick={()=>this.handleChartClick(event,"1d","Today")}>1D</button>
              <button onClick={()=>this.handleChartClick(event,"1m","Past Month")}>1M</button>
              <button onClick={()=>this.handleChartClick(event,"3m","Past 3 Months")}>3M</button>
              <button onClick={()=>this.handleChartClick(event,"1y", "Past Year")}>1Y</button>
              <button onClick={()=>this.handleChartClick(event,"5y", "Past 5 Years")}>5Y</button>
            </div>
            <CompanyInfo stockInfo={this.props.stock.stockInfo} news={this.props.news}/>
            <News search={this.props.stock.company.name}/>
          </div>
          <WatchlistButton contprops={this.props} color={this.props.color}/>
        </div>
        );
      }
    }
}




const mapStateToProps = (state, ownProps) => {

  return {
    id: ownProps.match.params.id,
    stock: state.entities.stock,
    watchlist: state.entities.watchlist,
    color: state.ui
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    fetchCompany: (id) => dispatch(fetchCompany(id)),
    fetchChart: (symbol, range) => dispatch(fetchChart(symbol, range)),
    fetchCompanyInfo: (symbol) => dispatch(fetchCompanyInfo(symbol)),
    fetchQuote: (symbol) => dispatch(fetchQuote(symbol)),
    fetchStockInfo: (symbol) => dispatch(fetchStockInfo(symbol)),
    createWatchlistMembership: (company_id) => dispatch(createWatchlistMembership(company_id)),
    updateColor: (color) => dispatch(updateColor(color))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stock);
