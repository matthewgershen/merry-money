import React from 'react';
import { connect } from 'react-redux';
import { fetchPortfolioHoldings } from '../../actions/portfolio_holdings_actions';
import { PieChart, Pie, Sector, Cell, Tooltip, Label } from 'recharts';
import { selectAllPortfolioHoldings } from './../../reducers/selectors';

class Holdings extends React.Component{
  constructor(props) {
    super(props);

  }

  componentDidMount(){
    this.props.fetchPortfolioHoldings();
  }


  render(){

    if (Object.keys(this.props.holdings).length === 0 ||this.props.holdings[0] === "No portfolio holdings") {
        return <div></div>
    } else {
    const data = []
    let totalHoldingsValue = 0
    this.props.holdings.forEach((holding)=>{
      let pie = {}
      pie["name"] = holding.name
      pie["value"] = holding.shares * holding.price
      totalHoldingsValue += holding.shares * holding.price
      data.push(pie);
    });

    return (
      <div>
        <h2>Portfolio Holdings</h2>
        <PieChart width={800} height={350}>
          <Pie dataKey='value' data={data} cx={400} cy={180} innerRadius={80} outerRadius={150} fill={this.props.stroke}>
            <Label width={30} position="center">
              { `Total Holdings: ${totalHoldingsValue.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}` }
            </Label>
          </Pie>
          <Tooltip formatter={(value) => new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(value)}/>
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
