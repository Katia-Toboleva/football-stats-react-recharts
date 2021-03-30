import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
} from 'recharts';

const Chart = ({ data, teamColor }) => (
  <RadarChart
    cx={300}
    cy={220}
    outerRadius={150}
    width={550}
    height={500}
    data={data}
  >
    <PolarGrid />
    <PolarAngleAxis dataKey="axis" />
    <PolarRadiusAxis orientation="left" />
    <Tooltip />
    <Radar
      name="total"
      dataKey="value"
      stroke={teamColor}
      fill={teamColor}
      fillOpacity={0.7}
      dot
    />
  </RadarChart>
);

export default Chart;
