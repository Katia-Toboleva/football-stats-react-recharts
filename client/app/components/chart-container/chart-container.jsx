import React from 'react';
import ParentSize from '@visx/responsive/lib/components/ParentSize';

import Chart from '../chart';
import statData from '../../mocks/stat-data.json';

const params = (Object.values(statData[0])).splice(3);

const ChartContainer = ({ searchResult }) => (
  <>
    <ParentSize>
      {({ width }) => (
        <Chart
          width={width}
          height={650}
          data={params}
          searchResult={searchResult}
        />
      )}
    </ParentSize>
  </>
);

export default ChartContainer;
