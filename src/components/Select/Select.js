import React, { useCallback } from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue, resizeSelect } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const selectRef = useCallback(node => {
    if (node !== null) {
      resizeSelect(node);
    }
  }, []);
  const displayedValue = getDisplayedValue(value, children);

  const handleSelectOnChange = (ev) => {
    onChange(ev);
    resizeSelect(ev.target);
  };

  return (
    <Wrapper>
      <Icon id="chevron-down" size={25} style={{
        position: 'absolute',
        right: 5,
        top: '50%',
        transform: 'translateY(-50%)'
      }}  />
      <CustomSelect value={value} onChange={handleSelectOnChange} ref={selectRef} >
        {children}
      </CustomSelect>

    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: fit-content;
  position: relative;
  font-weight: 400;
  color: ${COLORS.gray700};

  &:hover {
    color: revert;
  }
`;

const CustomSelect = styled.select`
  background-color: ${COLORS.transparentGray15};
  height: 43px;
  padding: 12px 16px;
  padding-right: 20px;
  border-radius: 8px;
  border: none;
  appearance: none;
  position: relative;
  color: inherit;
`;

export default Select;
