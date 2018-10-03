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
        return <div>hang on</div>
    }else {
    const data = []
    this.props.holdings.forEach((holding)=>{
      let pie = {}
      pie["name"] = holding.name
      pie["value"] = holding.shares * holding.price
      data.push(pie);
    });
    
    return (
      <PieChart width={800} height={400}>
        <Pie data={data} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d"/>
        <Tooltip/>
       </PieChart>
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
