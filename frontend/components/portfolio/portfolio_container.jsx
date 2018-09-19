import React from 'react';
import { connect } from 'react-redux';
import { fetchSnapshots } from '../../actions/portfolio_snapshot_actions';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip } from 'recharts';

class Portfolio extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      range: 365,
      rangeShow: "Year"
    };
    this.filterRange = this.filterRange.bind(this)
    this.handleChartClick = this.handleChartClick.bind(this)
  }

  componentDidMount(){
    this.props.fetchSnapshots()
  }

  filterRange() {

    const filtered = []
    let filterDay = new Date ()
    new Date(filterDay.setDate(filterDay.getDate()-this.state.range))
    this.props.snapshots.forEach((snap)=>{
      if (new Date(snap.date) > filterDay) {
        filtered.push(snap)
      }
    })
    return filtered
  }

  handleChartClick(range,rangeShow){
    this.setState({range: range, rangeShow: rangeShow});
  }

  render(){
    if (this.props.snapshots.length === 0) {
      return (
        <div>
          <div>Is This Visible</div>
          <div>Is This Visible</div>
          <div>Is This Visible</div>
          <div>Is This Visible</div>
          <div>Is This Visible</div>
          <div>Is This Visible</div>
          <div>Is This Visible</div>
          <div>Is This Visible</div>
          <div>Is This Visible</div>
          <div>Is This Visible</div>
          <div>Is This Visible</div>
          <div>Is This Visible</div>
        </div>
      )

    } else {

      const data = this.filterRange()
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
                <span>{this.state.rangeShow}</span>
              </div>
          	<LineChart width={675} height={200} data={data}>
                <Line type="monotone" dataKey="total_value" stroke={stroke} dot={false}/>
               <XAxis dataKey="date" hide={true}/>
               <YAxis  domain={[min,max]} hide={true}/>
               <Tooltip/>
            </LineChart>

            <div className="chart-ranges">
              <button onClick={()=>this.handleChartClick(7,"Past Week")}>1W</button>
              <button onClick={()=>this.handleChartClick(30,"Past Month")}>1M</button>
              <button onClick={()=>this.handleChartClick(90,"Past 3 Months")}>3M</button>
              <button onClick={()=>this.handleChartClick(365,"Past Year")}>1Y</button>
              <button onClick={()=>this.handleChartClick(1825,"Past 5 Years")}>5Y</button>
            </div>
          </div>
        );
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
