import React from 'react';
import styles from './spinner.scss';

const Spinner = () => (
  <div className={styles['spinner-container']}>
    <div className={styles['spinner']} />
  </div>
);

export default Spinner;
