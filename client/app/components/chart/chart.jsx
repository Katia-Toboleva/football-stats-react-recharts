import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts';

const Chart = ({ data }) => (
  <RadarChart
    cx={300}
    cy={250}
    outerRadius={150}
    width={500}
    height={500}
    data={data}
  >
    <PolarGrid />
    <PolarAngleAxis dataKey="axis" />
    <PolarRadiusAxis />
    <Radar
      name=""
      dataKey="value"
      stroke="#8884d8"
      fill="#8884d8"
      fillOpacity={0.6}
    />
  </RadarChart>
);

export default Chart;
