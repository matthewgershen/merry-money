import { connect } from 'react-redux';
import { fetchCompany, fetchChart, fetchStockInfo, fetchCompanyInfo, fetchQuote } from './../../actions/company_actions';
import React from 'react';
import CompanyInfo from './info';
import Chart from './chart';

class Stock extends React.Component{
  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.fetchCompany(this.props.id).then(action =>
      this.props.fetchStockInfo(action.company.symbol));
      // .then(action => {
      //   return this.props.fetchChart(action.info.symbol,"1d")
      // });
  }

  render(){
      if (!this.props.stock.stockInfo.company) {
        return (<div></div>);
      } else {
        return(
        <div>
          // <Chart chart={this.props.stock.chart}/>
          <CompanyInfo info={this.props.stock.stockInfo.company}/>
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
