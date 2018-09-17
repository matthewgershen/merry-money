import { connect } from 'react-redux';
import { fetchWatchlistMemberships } from './../../actions/watchlist_memberships_actions';
import React from 'react';
import { selectAllWatchlistMemberships } from './../../reducers/selectors'


class Watchlist extends React.Component{
  constructor(props){
    super(props);

    };

  componentDidMount(){
    this.props.fetchWatchlistMemberships();
  }


  render(){
    if (Object.keys(this.props.companies).length === 0 || !this.props.watchlist.length) {
      return (<div></div>);
    } else {
      
      const watchlistItems = this.props.watchlist.map((item,idx)=>{
        return (
          <li key={idx}>{this.props.companies[item.company_id].name}</li>
        );
      });
      return(
        <ul>
          {watchlistItems}
        </ul>
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
