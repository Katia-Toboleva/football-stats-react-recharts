import React from 'react';
import classnames from 'classnames/bind';
import styles from './row.scss';

const cx = classnames.bind(styles);

const Row = (props) => {
  const {
    direction,
    children,
    center,
    alignItems,
    justifyContent,
  } = props;

  return (
    <div
      className={cx('grid', {
        [`grid--${direction}`]: direction,
        'grid--center': center,
        [`grid--align-items-${alignItems}`]: alignItems,
        [`grid--justify-content-${justifyContent}`]: justifyContent,
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
