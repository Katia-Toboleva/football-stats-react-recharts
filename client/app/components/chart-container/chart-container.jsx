import React from 'react';
import Chart from '../chart';

const ChartContainer = ({ searchResult, teamData }) => {
  const teamId = searchResult.team_id;
  const teamObj = teamData.find(team => teamId === team.team_id);
  const { team_first_color } = teamObj;

  const convertedData = (Object.entries(searchResult).reduce((acc, currentItem) => [...acc, {
    axis: currentItem[0],
    value: currentItem[1],
  }], [])).splice(5);

  return (
    <Chart
      data={convertedData}
      teamColor={team_first_color}
    />
  );
};

export default ChartContainer;
