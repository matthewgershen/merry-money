import { connect } from 'react-redux';
import { fetchWatchlistMemberships } from './../../actions/watchlist_memberships_actions';
import React from 'react';
import { selectAllWatchlistMemberships } from './../../reducers/selectors';
import { Link } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import StockChart from './../lists/stock_charts';

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
        (!this.props.watchlist.length &&
        (priceCheck(this.props.watchlist)) > 0)) {
      return (
        <div className="watchlist">
          <h3>Watchlist</h3>
            <img src={window.loading_url}/>
        </div>
      );
    } else if (this.props.watchlist[0] === "No watchlist items") {

      return (
        <div className="watchlist">
          <h3>Watchlist</h3>
            <p>Search a stock to add to your watchlist</p>
        </div>
      );
    }else{


      const watchlistItems = this.props.watchlist.map((item,idx)=>{

        let stockshow = `/stocks/${item.company_id}`;

        return (
          <div key={item.id} className="items">
            <Link to={stockshow}>
              <li>
                <span>{this.props.companies[item.company_id].symbol}</span>
                <StockChart item={item}/>
              </li>
            </Link>
          </div>
        );
      });


      return(
        <div className="watchlist">
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
