import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip } from 'recharts';

const Chart = (props) =>{
  const data = props.data
  console.log(data);
  return(
      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="high" stroke="#8884d8"/>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis />
      </LineChart>

  );
};


export default Chart;
