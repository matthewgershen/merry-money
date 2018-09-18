import { connect } from 'react-redux';
import { fetchWatchlistMemberships, removeWatchlistMembership, createWatchlistMembership } from './../../actions/watchlist_memberships_actions';
import React from 'react';
import { selectAllWatchlistMemberships } from './../../reducers/selectors'
import { Link } from 'react-router-dom';

class WatchlistButton extends React.Component{
  constructor(props){
    super(props);

    };

  componentDidMount(){
    this.props.fetchWatchlistMemberships();
  }


  render(){
    const color = this.props.color

    const watchlistId = []
    this.props.watchlist.forEach((item)=>{
      if (item.company_id === parseInt(this.props.contprops.id)) {
        watchlistId.push(item.id)
      }
    });
    if (watchlistId.length === 0) {
      return(
        <button style={{color: color,borderColor:color}} className="watch-add" onClick={()=>this.props.createWatchlistMembership(this.props.contprops.id)}>Add to Watchlist</button>
      )
    } else {
      return(
        <button style={{color: color,borderColor:color}} className="watch-remove" onClick={()=>this.props.removeWatchlistMembership(watchlistId[0])}>Remove From Watchlist</button>
      )}

  }



}


const mapStateToProps = (state, ownProps) => {
  return{
    watchlist: selectAllWatchlistMemberships(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    fetchWatchlistMemberships: () => dispatch(fetchWatchlistMemberships()),
    removeWatchlistMembership: (id) => dispatch(removeWatchlistMembership(id)),
    createWatchlistMembership: (companyId) => dispatch(createWatchlistMembership(companyId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WatchlistButton);
