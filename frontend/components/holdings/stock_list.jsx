import { connect } from 'react-redux';
import React from 'react';
import { selectAllPortfolioHoldings } from './../../reducers/selectors';
import { Link } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';


class Stocklist extends React.Component{
  constructor(props){
    super(props);

    }



  render(){

    if (!this.props.holdings.length || !this.props.holdings[0].chart) {
      return (
        <div className="watchlist">
          <h3>Stocks</h3>
            <img src={window.loading_url}/>
        </div>
      );
    }
    else if (this.props.holdings[0] === "No portfolio holdings") {
      return (
        <div className="watchlist">
          <h3>Stocks</h3>
            <p>Search a stock to add to your holdings</p>
        </div>
      );
    }
    else{

      const findFirstNotNull = (data) => {
        for (var i = 0; i < data.length; i++) {
          if (!!data[i].close) {
            return data[i].close;
          }
        }
      };
      const findLastNotull = (data) => {
        for (var i = 1; i < data.length; i++) {
          if (!!data[data.length - i].close) {
            return data[data.length - i].close;
          }
        }
      };

      const stocksOwned = this.props.holdings.filter(item => item.shares > 0);
      const stocks = stocksOwned.map((item,idx)=>{
        let stockshow = `/stocks/${item.id}`;

        const data = item.chart;
        const max = data.length < 1 ? 0 : parseFloat(data.reduce((prev, current) => (prev.close > current.close) ? prev : current).close);
        const min = data.length < 1 ? 0 : parseFloat(data.reduce((prev, current) => (prev.close < current.close) ? prev : current).close);
        const first = findFirstNotNull(data);
        const last = findLastNotull(data);
        const stroke = (last < first) ? "#f45531" : "#21ce99";

        return (
          <div key={item.id} className="items">
            <Link to={stockshow}>
              <li>
                <div className="stock-shares">
                  <span>{item.symbol}</span>
                  <div>{item.shares} Shares</div>
                </div>
                <LineChart width={75} height={50} data={data}>
                  <Line connectNulls={true} type="monotone" dataKey="close" stroke={stroke} dot={false}/>
                  <XAxis dataKey="date" hide={true}/>
                  <YAxis  domain={[min,max]} hide={true}/>
                </LineChart>
                <span>{item.price.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</span>
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