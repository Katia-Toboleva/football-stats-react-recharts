import React from 'react';
import classnames from 'classnames/bind';
import styles from './button.scss';

const cx = classnames.bind(styles);

const Button = ({
  onClick, isDisabled, text, type,
}) => (
  <div
    className={cx('button', {
      [`button--${type}`]: type,
      'button--isDisabled': isDisabled,
    })}
    onClick={onClick}
  >
    {text}
  </div>
);

export default Button;
