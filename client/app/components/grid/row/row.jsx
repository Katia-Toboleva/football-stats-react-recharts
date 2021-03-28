import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './row.scss';

const cx = classnames.bind(styles);

const Row = (props) => {
  const {
    direction,
    children,
    center,
    gutters,
    alignItems,
    justifyContent,
  } = props;

  return (
    <div
      className={cx('grid', {
        [`grid--${direction}`]: direction,
        'grid--center': center,
        [`grid--gutters-${gutters}`]: gutters,
        [`row--align-items-${alignItems}`]: alignItems,
        [`row--justify-content-${justifyContent}`]: justifyContent,
      })}
    >
      {children}
    </div>
  );
};

Row.defaultProps = {
  direction: 'row',
};

export default Row;
