import React from 'react';
import ParentSize from '@visx/responsive/lib/components/ParentSize';

import Chart from '../chart';
import * as data from '../../mocks/stat-data.json';

const ChartContainer = () => (
  <>
    <div>filters</div>
    <ParentSize>
      {({ width }) => <Chart width={width} height={650} />}
    </ParentSize>
  </>
);

export default ChartContainer;
