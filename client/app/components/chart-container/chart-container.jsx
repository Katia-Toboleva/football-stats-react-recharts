import React from 'react';
import ParentSize from '@visx/responsive/lib/components/ParentSize';

import Chart from '../chart';
import statData from '../../mocks/stat-data.json';

const ChartContainer = ({ searchResult }) => {
  const convertedData = (Object.entries(searchResult[0]).reduce((acc, currentItem) => [...acc, {
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
