import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

class Chart extends React.Component{
  constructor(props){
    super(props);

  }




  render(){


  const find_first_not_null = (data) => {
    for (var i = 0; i < data.length; i++) {
      if (!!data[i].close) {
        return data[i].close;
      }
    }
  };

  const find_last_not_null = (data) => {
    for (var i = 1; i < data.length; i++) {
      if (!!data[data.length - i].close) {
        return data[data.length - i].close;
      }
    }
  };

  const data = this.props.data;
  const max = data.length < 1 ? 0 : parseFloat(data.reduce((prev, current) => (prev.close > current.close) ? prev : current).close);
  const min = data.length < 1 ? 0 : parseFloat(data.reduce((prev, current) => (prev.close < current.close) ? prev : current).close);
  const first = find_first_not_null(data);
  const last = find_last_not_null(data);
  const stroke = (last < first) ? "#f45531" : "#21ce99";
  const diff  = (last - first).toLocaleString('en-US', {style: 'currency', currency: 'USD'});
  const percent = (((last - first)/first) * 100).toFixed(2) + '%';
  const sign = ((last-first) > 0) ? "+" : "";

    return(
    <div>
      <div className="diff">
        <span>{sign}{diff}</span>
        <span>({percent})</span>
        <span className="range">{this.props.rangeShow}</span>
      </div>
      <LineChart width={675} height={200} data={data}>
        <Line connectNulls={true} type="monotone" dataKey="close" stroke={this.props.color} dot={false}/>
        <Tooltip />
        <XAxis dataKey="date" hide={true}/>
        <YAxis  domain={[min,max]} hide={true}/>
      </LineChart>
    </div>
    );
  }
}


export default Chart;
