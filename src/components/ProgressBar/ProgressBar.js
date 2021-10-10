/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    height: 8,
    padding: 0,
    radius: 4
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4
  },
  large: {
    height: 16,
    padding: 4,
    radius: 8
  }
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }

  const Wrapper = styled.div`
    background-color: ${COLORS.transparentGray15};
    max-width: 370px;
    box-shadow: 0px 2px 4px 0px ${COLORS.transparentGray35} inset;
    border-radius: var(--radius);
    padding: var(--padding);

    /* Trim off corners when approaching end of element */
    overflow: hidden;
  `;

  const BaseProgressBar = styled.div`
    background-color: ${COLORS.primary};
    height: var(--height);
    width: var(--width);
  `;

  const BarWrapper = styled.div`
    border-radius: 4px;
    overflow: hidden;
  `;

  return <Wrapper role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100} 
          style={{
            '--padding': styles.padding + 'px',
            '--radius': styles.radius + 'px'
          }} >
        <VisuallyHidden>{value}%</VisuallyHidden>
        <BarWrapper>
          <BaseProgressBar style={{
            "--width": value + '%',
            "--height": styles.height + 'px'
          }} />
        </BarWrapper>
    </Wrapper>;
};

export default ProgressBar;
