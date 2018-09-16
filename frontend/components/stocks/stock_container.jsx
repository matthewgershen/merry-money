import { connect } from 'react-redux';
import { fetchCompany, fetchChart, fetchStockInfo, fetchCompanyInfo, fetchQuote } from './../../actions/company_actions';
import React from 'react';
import CompanyInfo from './info';
import Chart from './chart';

class Stock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      range: '1y'
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

  handleChartClick(range){
    this.props.fetchChart(this.props.stock.company.symbol,range)
    this.setState({range: range});
  }

  render(){
      if (!this.props.stock.chart[0]) {
        return (<div></div>);
      } else {
        return(
        <div className="stock-wrapper">
          <h1>{this.props.stock.company.name}</h1>
          <h1>{this.props.stock.stockInfo.quote.latestPrice.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</h1>
          <Chart data={this.props.stock.chart} range={this.state.range}/>
          <div className="chart-ranges">
            <button onClick={()=>this.handleChartClick("1d")}>1D</button>
            <button onClick={()=>this.handleChartClick("1m")}>1M</button>
            <button onClick={()=>this.handleChartClick("3m")}>3M</button>
            <button onClick={()=>this.handleChartClick("1y")}>1Y</button>
            <button onClick={()=>this.handleChartClick("5y")}>5Y</button>
          </div>
          <CompanyInfo stockInfo={this.props.stock.stockInfo}/>
        </div>
        );
      }
    }
}




const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.match.params.id,
    stock: state.entities.stock
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    fetchCompany: (id) => dispatch(fetchCompany(id)),
    fetchChart: (symbol, range) => dispatch(fetchChart(symbol, range)),
    fetchCompanyInfo: (symbol) => dispatch(fetchCompanyInfo(symbol)),
    fetchQuote: (symbol) => dispatch(fetchQuote(symbol)),
    fetchStockInfo: (symbol) => dispatch(fetchStockInfo(symbol))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stock);
