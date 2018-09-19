import React from 'react';
import { connect } from 'react-redux';
import { fetchSnapshots } from '../../actions/portfolio_snapshot_actions';

class Portfolio extends React.Component{
  constructor(props) {
    super(props);

  }

  componentDidMount(){
    this.props.fetchSnapshots()
  }


  render(){
    if (!this.props.snapshots[34]) {
      return <div></div>
    } else {
      return(
        <div className="portfolio-wrapper">
          <div>{this.props.snapshots[34].total_value}</div>
          <div>{this.props.snapshots[34].total_value}</div>
          <div>{this.props.snapshots[34].total_value}</div>
          <div>{this.props.snapshots[34].total_value}</div>
          <div>{this.props.snapshots[34].total_value}</div>
          <div>{this.props.snapshots[34].total_value}</div>
        </div>
      )
    }
  }
}


const mapStateToProps = (state) => {
  return{
    snapshots: state.entities.snapshots
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetchSnapshots: () => dispatch(fetchSnapshots())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Portfolio);
