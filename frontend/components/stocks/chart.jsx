import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip } from 'recharts';

const Chart = (props) =>{
  const data = props.data
  const max = data.reduce((prev, current) => (prev.close > current.close) ? prev : current)
  const min = data.reduce((prev, current) => (prev.close < current.close) ? prev : current)
  const first = data[0].close
  const last = data[data.length - 1].close
  const stroke = (last > first) ? "#21ce99" : "#f45531";

  return(
      <LineChart width={675} height={200} data={data}>
        <Line type="monotone" dataKey="close" stroke={stroke} dot={false}/>
        <Tooltip />
        <XAxis dataKey="date" hide={true}/>
        <YAxis  domain={[{min},{max}]} hide={true}/>
      </LineChart>

  );
};


export default Chart;
