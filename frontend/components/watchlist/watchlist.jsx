import { connect } from 'react-redux';
import { fetchWatchlistMemberships } from './../../actions/watchlist_memberships_actions';
import React from 'react';
import { selectAllWatchlistMemberships, selectAllPortfolioHoldings } from './../../reducers/selectors';
import { Link } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';


class Watchlist extends React.Component{
  constructor(props){
    super(props);

    }

  componentDidMount(){
    this.props.fetchWatchlistMemberships();

  }


  render(){
      const priceCheck = (obj) => {
        let check = 0;
        obj.forEach((item) => {
          if (!item.price) {
            check += 1;
          }
        });
        return check;
      };

    if (Object.keys(this.props.companies).length === 0 ||
        !this.props.watchlist.length ||
        !this.props.holdings.length ||
        (priceCheck(this.props.watchlist)) > 0) {
      return (
        <div className="watchlist">
          <h3>Stocks</h3>
          <h3>Watchlist</h3>
            <img src={window.loading_url}/>
        </div>
      );
    } else {


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



      const watchlistItems = this.props.watchlist.map((item,idx)=>{
        let stockshow = `/stocks/${item.company_id}`;

        const data = item.chart;
        const max = parseFloat(data.reduce((prev, current) => (prev.close > current.close) ? prev : current).close);
        const min = parseFloat(data.reduce((prev, current) => (prev.close < current.close) ? prev : current).close);
        const first = findFirstNotNull(data);
        const last = findLastNotull(data);
        const stroke = (last > first) ? "#21ce99" : "#f45531";

        return (
          <div key={item.id} className="items">
            <Link to={stockshow}>
              <li>
                <span>{this.props.companies[item.company_id].symbol}</span>
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

      const stocks = this.props.holdings.map((item,idx)=>{
        let stockshow = `/stocks/${item.id}`;

        const data = item.chart;
        const max = parseFloat(data.reduce((prev, current) => (prev.close > current.close) ? prev : current).close);
        const min = parseFloat(data.reduce((prev, current) => (prev.close < current.close) ? prev : current).close);
        const first = findFirstNotNull(data);
        const last = findLastNotull(data);
        const stroke = (last > first) ? "#21ce99" : "#f45531";

        return (
          <div key={item.id} className="items">
            <Link to={stockshow}>
              <li>
                <span>{item.symbol}</span>
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
          <h3>Watchlist</h3>
          <ul>
            {watchlistItems}
          </ul>
        </div>
      );
    }
  }

}


const mapStateToProps = (state) => {
  return{
    watchlist: selectAllWatchlistMemberships(state),
    holdings: selectAllPortfolioHoldings(state),
    companies: state.entities.companies
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    fetchWatchlistMemberships: () => dispatch(fetchWatchlistMemberships()),
    fetchCompany: (id) => dispatch(fetchCompany(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Watchlist);
