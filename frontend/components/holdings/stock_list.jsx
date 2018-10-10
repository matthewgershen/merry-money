import { connect } from 'react-redux';
import React from 'react';
import { selectAllPortfolioHoldings } from './../../reducers/selectors';
import { Link } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import StockChart from './../lists/stock_charts';

class Stocklist extends React.Component{
  constructor(props){
    super(props);

    }



  render(){

    if (this.props.holdings[0] === "No portfolio holdings" && Object.values(this.props.holdings).length === 1) {
      return (
        <div className="watchlist">
          <h3>Stocks</h3>
            <p>Search a stock to add to your holdings</p>
        </div>
      );

    }
    else if (!this.props.holdings.length) {
      return (
        <div className="watchlist">
          <h3>Stocks</h3>
            <img src={window.loading_url}/>
        </div>
      );
    }
    else{

      const stocksOwned = this.props.holdings.filter(item => item.shares > 0);
      const stocks = stocksOwned.map((item,idx)=>{
        let stockshow = `/stocks/${item.id}`;


        return (
          <div key={idx} className="items">
            <Link to={stockshow}>
              <li>
                <div className="stock-shares">
                  <span>{item.symbol}</span>
                  <div>{item.shares} Shares</div>
                </div>
                <StockChart item={item}/>
              </li>
            </Link>
          </div>
        );
      });

      return(
        <div className="watchlist">
          <h3>Stocks</h3>
          <ul>
            {stocks}
          </ul>
        </div>
      );
    }
  }

}


const mapStateToProps = (state) => {
  return{
    holdings: selectAllPortfolioHoldings(state),
    companies: state.entities.companies
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    fetchCompany: (id) => dispatch(fetchCompany(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stocklist);
