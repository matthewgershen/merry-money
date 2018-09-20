import { connect } from 'react-redux';
import { fetchWatchlistMemberships } from './../../actions/watchlist_memberships_actions';
import React from 'react';
import { selectAllWatchlistMemberships } from './../../reducers/selectors'
import { Link } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';


class Watchlist extends React.Component{
  constructor(props){
    super(props);

    };

  componentDidMount(){
    this.props.fetchWatchlistMemberships();
  }


  render(){
    if (Object.keys(this.props.companies).length === 0 || !this.props.watchlist.length) {
      return (
        <div className="watchlist">
          <h3>Watchlist</h3>

        </div>
      );
    } else {


      const watchlistItems = this.props.watchlist.map((item,idx)=>{
        let stockshow = `/stocks/${item.company_id}`

        const data = item.chart
        debugger
        const max = parseFloat(data.reduce((prev, current) => (prev.close > current.close) ? prev : current).close)
        const min = parseFloat(data.reduce((prev, current) => (prev.close < current.close) ? prev : current).close)
        const first = data[0].close
        const last = data[data.length - 1].close
        const stroke = (last > first) ? "#21ce99" : "#f45531";



        return (
          <Link to={stockshow} key={item.id}>
            <li>
              <div>{this.props.companies[item.company_id].symbol}</div>
                <LineChart width={75} height={50} data={data}>
                  <Line type="monotone" dataKey="close" stroke={stroke} dot={false}/>
                  <XAxis dataKey="date" hide={true}/>
                  <YAxis  domain={[min,max]} hide={true}/>
                </LineChart>
              <div>{item.price.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</div>
            </li>
          </Link>
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
    fetchWatchlistMemberships: () => dispatch(fetchWatchlistMemberships())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Watchlist);
