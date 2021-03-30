import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts';

const Chart = ({ data, teamColor }) => (
  <RadarChart
    cx={300}
    cy={250}
    outerRadius={150}
    width={550}
    height={500}
    data={data}
  >
    <PolarGrid />
    <PolarAngleAxis dataKey="axis" />
    <PolarRadiusAxis />
    <Radar
      name="player"
      dataKey="value"
      stroke={teamColor}
      fill={teamColor}
      fillOpacity={0.7}
    />
  </RadarChart>
);

export default Chart;
