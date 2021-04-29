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
  background: rgba(128, 128, 128, 0.15);
  width: 370px;
  height: ${(props) => DIMS[props.$size].height}px;
  padding: ${(props) => DIMS[props.$size].padding}px;
  border-radius: ${(props) => DIMS[props.$size].radius}px;
  overflow: hidden;
`

const Bar = styled.div`
  background-color: #4747eb;
  width: ${(props) => props.$value}%;
  height: 100%;
  border-radius: ${(props) =>
    props.$size === 'large'
      ? props.$value >= 99.5
        ? '4px'
        : '4px 0 0 4px'
      : 'none'};
`

const ProgressBar = ({ value, size = 'medium' }) => {
  return (
    <BarContainer
      role='progressbar'
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      $size={size}
    >
      <Bar $size={size} $value={value}>
        <VisuallyHidden>{value}%</VisuallyHidden>
      </Bar>
    </BarContainer>
  )
}

export default ProgressBar
