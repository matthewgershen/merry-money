import React from 'react';
import { connect } from 'react-redux';
import { fetchSnapshots } from '../../actions/portfolio_snapshot_actions';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip } from 'recharts';

class Portfolio extends React.Component{
  constructor(props) {
    super(props);

  }

  componentDidMount(){
    this.props.fetchSnapshots()
  }


  render(){
    if (this.props.snapshots.length === 0) {
      return <div></div>
    } else {
      const data = this.props.snapshots
      const max = parseFloat(data.reduce((prev, current) => (parseFloat(prev.total_value) > parseFloat(current.total_value)) ? prev : current).total_value)
      const min = parseFloat(data.reduce((prev, current) => (parseFloat(prev.total_value) < parseFloat(current.total_value)) ? prev : current).total_value)
      const first = data[0].total_value
      const last = data[data.length - 1].total_value
      const stroke = (last > first) ? "#21ce99" : "#f45531";
      const diff  = (last - first).toLocaleString('en-US', {style: 'currency', currency: 'USD'})
      const percent = (((last - first)/first) * 100).toFixed(2) + '%'
      const sign = ((last-first) > 0) ? "+" : ""
        return(
          <div className="portfolio-wrapper">
              <div className="diff">
                <h1>{parseFloat(last).toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</h1>
                <span>{sign}{diff}</span>
                <span>({percent})</span>
              </div>
          	<LineChart width={675} height={200} data={data}>
              <Line type="monotone" dataKey="total_value" stroke={stroke} dot={false}/>
             <XAxis dataKey="date" hide={true}/>
             <YAxis  domain={[min,max]} hide={true}/>
             <Tooltip/>
            </LineChart>
          </div>
    );
        // <div className="portfolio-wrapper">
        //   <div className="diff">
        //     <span>{sign}{diff}</span>
        //     <span>({percent})</span>
        //
        //   </div>
        //   <LineChart width={675} height={200} data={data}>
        //     <Line type="monotone" dataKey="total_value" stroke={stroke} dot={false}/>
        //     <Tooltip />
        //     <XAxis dataKey="date" hide={true}/>
        //     <YAxis  domain={[{min},{max}]} hide={true}/>
        //   </LineChart>
        // </div>
        // );
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
