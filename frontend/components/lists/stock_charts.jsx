import { connect } from 'react-redux';
import React from 'react';
import { selectAllPortfolioHoldings } from './../../reducers/selectors';
import { Link } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

export default class StockChart extends React.Component{
  constructor(props){
    super(props);

    }


render(){
  debugger
  if (!this.props.item.chart) {
    return <img className="chart-load" src={window.loading_dots}/>
  } else {
  const findFirstNotNull = (data) => {
    for (var i = 0; i < data.length; i++) {
      if (!!data[i].close) {
        return data[i].close;
      }
    }
  };
  const findLastNotull = (data) => {
    for (var i = 1; i < data.length; i++) {
      if (!!data[data.length - i].close) {
        return data[data.length - i].close;
      }
    }
  };

  const data = this.props.item.chart;
  const max = data.length < 1 ? 0 : parseFloat(data.reduce((prev, current) => (prev.close > current.close) ? prev : current).close);
  const min = data.length < 1 ? 0 : parseFloat(data.reduce((prev, current) => (prev.close < current.close) ? prev : current).close);
  const first = findFirstNotNull(data);
  const last = findLastNotull(data);
  const stroke = (last < first) ? "#f45531" : "#21ce99";

  return(
    <div className="chart-price">
      <LineChart width={75} height={50} data={data}>
        <Line connectNulls={true} type="monotone" dataKey="close" stroke={stroke} dot={false}/>
        <XAxis dataKey="date" hide={true}/>
        <YAxis  domain={[min,max]} hide={true}/>
      </LineChart>
      <span>{this.props.item.price.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</span>
    </div>
    )
    }
  }
}



// const mapStateToProps = (state) => {
//   return{
//     holdings: selectAllPortfolioHoldings(state),
//     companies: state.entities.companies
//   };
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return{
//     fetchCompany: (id) => dispatch(fetchCompany(id))
//   };
// };
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(StockChart);
