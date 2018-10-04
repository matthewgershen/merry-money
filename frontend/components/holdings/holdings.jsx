import React from 'react';
import { connect } from 'react-redux';
import { fetchPortfolioHoldings } from '../../actions/portfolio_holdings_actions';
import { PieChart, Pie, Sector, Cell, Tooltip } from 'recharts';
import { selectAllPortfolioHoldings } from './../../reducers/selectors';

class Holdings extends React.Component{
  constructor(props) {
    super(props);

  }

  componentDidMount(){
    this.props.fetchPortfolioHoldings();
  }


  render(){

    if (Object.keys(this.props.holdings).length === 0) {
        return <div></div>
    }else {
    const data = []
    this.props.holdings.forEach((holding)=>{
      let pie = {}
      pie["name"] = holding.name
      pie["value"] = holding.shares * holding.price
      data.push(pie);
    });

    return (
      <div>
        <h2>Portfolio Holdings</h2>
        <PieChart width={800} height={350}>
          <Pie data={data} cx={400} cy={200} innerRadius={40} outerRadius={120} fill={this.props.stroke} />
          <Tooltip unit="$"/>
        </PieChart>
      </div>
    );
    }
  }
}

const mapStateToProps = (state) => {

  return{
    holdings: selectAllPortfolioHoldings(state)
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
