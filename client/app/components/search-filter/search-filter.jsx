import React, { useState } from 'react';
import classnames from 'classnames/bind';
import { Row, Column } from '../grid';
import Text from '../text';
import Icon from '../icon';

import styles from './search-filter.scss';

const cx = classnames.bind(styles);

const SearchFilter = ({ onChange, placeholder, fullWord }) => {
  const [value, setValue] = useState('');

  const handleInputChange = (event) => {
    const inputValue = event.currentTarget.value;
    const newInputValue = inputValue.trimStart();
    const isLastTwoCharsSpace = !inputValue.slice(-2).trim();
    const isFirstCharSpace = !newInputValue && !value;
    const isDeleting = value.slice(0, -1) === inputValue;

    if (!isDeleting && (isFirstCharSpace || isLastTwoCharsSpace)) {
      return;
    }

    setValue(inputValue);
    onChange(inputValue);
  };

  return (
    <div className={cx('search-filter')}>
      <Row alignItems="center">
        <Column>
          <div className={styles['search-filter__icon']}>
            <Icon icon="search" size="medium" theme="gray" />
          </div>
        </Column>
        <Column>
          <div className={styles['search-filter__content']}>
            <div className={styles['search-filter__field']}>
              <input
                type="text"
                value={value}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles['search-filter__text']}>
              {(!value && placeholder) && (
                <Text size="medium" weight="regular" color="light-gray">
                  {placeholder}
                </Text>
              )}

              {value && (
                <>
                  <Text size="medium" weight="regular">
                    {value}
                  </Text>
                  <Text size="medium" weight="regular" color="light-gray">
                    {fullWord.toLowerCase().split(value.toLowerCase())[1]}
                  </Text>
                </>
              )}
            </div>
          </div>
        </Column>
      </Row>
    </div>
  );
};

export default SearchFilter;
