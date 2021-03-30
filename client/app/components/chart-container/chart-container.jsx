import React from 'react';

import Chart from '../chart';

const ChartContainer = ({ searchResult }) => {
  const convertedData = (Object.entries(searchResult).reduce((acc, currentItem) => [...acc, {
    axis: currentItem[0],
    value: currentItem[1],
  }], [])).splice(4);

  return (
    <Chart
      data={convertedData}
    />

  );
};

export default ChartContainer;
