import { connect } from 'react-redux';
import { fetchWatchlistMemberships, removeWatchlistMembership, createWatchlistMembership } from './../../actions/watchlist_memberships_actions';
import React from 'react';
import { fetchCompany } from './../../actions/company_actions';
import { Link } from 'react-router-dom';

class WatchlistButton extends React.Component{
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
    }

  handleClick(action){
    if (action === "remove") {
      this.props.removeWatchlistMembership(this.props.onWatchlist).then(()=>this.props.fetchCompany(this.props.contprops.id))
    } else {
      this.props.createWatchlistMembership(this.props.contprops.id).then(()=>this.props.fetchCompany(this.props.contprops.id))
    }

  }


  render(){
    if (!!this.props.holdings[this.props.contprops.id] && this.props.holdings[this.props.contprops.id].shares > 0
    ) {
      return <div></div>
    } else {

    const color = this.props.color;

    // const watchlistId = [];
    // this.props.watchlist.forEach((item)=>{
    //   if (item.company_id === parseInt(this.props.contprops.id)) {
    //     watchlistId.push(item.id);
    //   }
    // });
    if (this.props.onWatchlist) {
      return(
        <button style={{color: color,borderColor:color}} className="watch-remove" onClick={()=>this.handleClick("remove")}>Remove From Watchlist</button>
      );
    } else {
      return(
        <button style={{color: color,borderColor:color}} className="watch-add" onClick={()=>this.handleClick("add")}>Add to Watchlist</button>
      );}
    }
  }


}


const mapStateToProps = (state, ownProps) => {
  return{
    onWatchlist: state.entities.stock.company.isWatched,
    holdings: state.entities.holdings
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    fetchWatchlistMemberships: () => dispatch(fetchWatchlistMemberships()),
    removeWatchlistMembership: (id) => dispatch(removeWatchlistMembership(id)),
    createWatchlistMembership: (companyId) => dispatch(createWatchlistMembership(companyId)),
    fetchCompany: (company_id) => dispatch(fetchCompany(company_id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WatchlistButton);
