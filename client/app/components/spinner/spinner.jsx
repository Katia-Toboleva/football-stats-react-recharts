import React from 'react';
import styles from './spinner.scss';
import Text from '../text';
import { Row, Column } from '../grid';

const Spinner = () => (
  <div className={styles['spinner-container']}>
    <Row direction="column" alignItems="center">
      <Column>
        <div className={styles['spinner']} />
      </Column>
      <Column>
        <Text
          size="medium"
          color="dark-blue"
          text="Loading"
        />
      </Column>
    </Row>
  </div>
);

export default Spinner;
