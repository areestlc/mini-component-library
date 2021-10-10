import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    size: 16,
    borderSize: 1,
    bottomOffset: 10,
    paddingLeft: 30
  },
  large: {
    size: 24,
    fontSize: 18,
    borderSize: 2,
    bottomOffset: 4,
    paddingLeft: 42
  }
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = SIZES[size];
  
  return <Wrapper style={{ '--width': width + 'px' }}>
      <NativeInput style={{ '--fontsize': styles.fontSize + 'px', '--paddingleft': styles.paddingLeft + 'px' }} placeholder={placeholder} />
      <IconWrapper style={{ '--size': styles.size + 'px' }}>
        <Icon id={icon} size={styles.size} strokeWidth={2} />
      </IconWrapper>
      <VisuallyHidden>Search</VisuallyHidden>
      <BorderWrapper style={{ '--bordersize': styles.borderSize + 'px', '--bottomoffset': styles.bottomOffset + 'px' }} />
  </Wrapper>;
};

const Wrapper = styled.div`
  position: relative;
  width: var(--width);
  height: 44px;
`;

const BorderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 5px;
  right: 5px;
  bottom: var(--bottomoffset);
  border-bottom: var(--bordersize) solid ${COLORS.black};
  pointer-events: none;
`;

const NativeInput = styled.input`
  width: 100%;
  height: 100%;
  padding-left: var(--paddingleft);
  border: none;
  font-size: var(--fontsize);
  color: ${COLORS.gray700};
  font-weight: bold;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: normal;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  pointer-events: none;
  top: 0;
  bottom: 0;
  margin: auto;
  left: 5px;
  width: var(--size);
  height: var(--size);
  color: ${COLORS.gray500};

  ${NativeInput}:hover + & {
    color: ${COLORS.black};
  }
`;

export default IconInput;
