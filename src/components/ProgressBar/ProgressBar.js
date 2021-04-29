import { COLORS } from '../../constants'
/* eslint-disable no-unused-vars */
import React from 'react'
import VisuallyHidden from '../VisuallyHidden'
import styled from 'styled-components'

const DIMS = {
  large: {
    padding: 4,
    height: 24,
    radius: 8,
  },
  medium: {
    height: 12,
    radius: 4,
  },
  small: {
    height: 8,
    radius: 4,
  },
}

const BarContainer = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background: ${COLORS.transparentGray15};
  padding: var(--padding);
  border-radius: var(--radius);
`

const GuaranteedRadius = styled.div`
  border-radius: 4px;
  overflow: hidden;
`

const Bar = styled.div`
  background-color: ${COLORS.primary};
  width: var(--width);
  height: var(--height);
`

const ProgressBar = ({ value, size = 'medium' }) => {
  const dims = DIMS[size]
  return (
    <BarContainer
      role='progressbar'
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      style={{
        '--padding': dims.padding + 'px',
        '--radius': dims.radius + 'px',
      }}
    >
      <GuaranteedRadius>
        <Bar style={{ '--height': dims.height + 'px', '--width': value + '%' }}>
          <VisuallyHidden>{value}%</VisuallyHidden>
        </Bar>
      </GuaranteedRadius>
    </BarContainer>
  )
}

export default ProgressBar
