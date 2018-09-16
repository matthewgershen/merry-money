import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip } from 'recharts';

const Chart = (props) =>{
  const data = props.data
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
      </div>
      <LineChart width={675} height={200} data={data}>
        <Line type="monotone" dataKey="close" stroke={stroke} dot={false}/>
        <Tooltip />
        <XAxis dataKey="date" hide={true}/>
        <YAxis  domain={[{min},{max}]} hide={true}/>
      </LineChart>
    </div>
  );
};


export default Chart;
