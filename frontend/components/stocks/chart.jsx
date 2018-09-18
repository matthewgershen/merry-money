import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip } from 'recharts';

class Chart extends React.Component{
  constructor(props){
    super(props);

  }

  componentDidUpdate(previousProps){
    const data = this.props.data
    const first = data[0].close
    const last = data[data.length - 1].close
    const stroke = (last > first) ? "#21ce99" : "#f45531";
    if (stroke !== previousProps.color){
      this.props.updateColor(stroke)
    }
  }

  render(){
  const data = this.props.data
  const max = data.reduce((prev, current) => (prev.close > current.close) ? prev : current)
  const min = data.reduce((prev, current) => (prev.close < current.close) ? prev : current)
  const first = data[0].close
  const last = data[data.length - 1].close
  const stroke = (last > first) ? "#21ce99" : "#f45531";
  const diff  = (last - first).toLocaleString('en-US', {style: 'currency', currency: 'USD'})
  const percent = (((last - first)/first) * 100).toFixed(2) + '%'
  const sign = ((last-first) > 0) ? "+" : ""

    return(
    <div>
      <div className="diff">
        <span>{sign}{diff}</span>
        <span>({percent})</span>
        <span>Past {this.props.range}</span>
      </div>
      <LineChart width={675} height={200} data={data}>
        <Line type="monotone" dataKey="close" stroke={this.props.color} dot={false}/>
        <Tooltip />
        <XAxis dataKey="date" hide={true}/>
        <YAxis  domain={[{min},{max}]} hide={true}/>
      </LineChart>
    </div>
    );
  }
};


export default Chart;
