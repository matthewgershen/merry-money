import React from 'react';
import { connect } from 'react-redux';
import { fetchPortfolioHoldings } from '../../actions/portfolio_holdings_actions';

class Holdings extends React.Component{
  constructor(props) {
    super(props);

  }

  componentDidMount(){
    this.props.fetchPortfolioHoldings();
  }


  render(){
    return <div>Holdings are going here</div>
  }
}

const mapStateToProps = (state) => {
  return{
    holdings: state.entities.portfolio_holdings
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    fetchPortfolioHoldings: () => dispatch(fetchPortfolioHoldings())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Holdings);
