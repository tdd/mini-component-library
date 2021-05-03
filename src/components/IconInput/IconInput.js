import { COLORS } from '../../constants'
import Icon from '../Icon'
import React from 'react'
import VisuallyHidden from '../VisuallyHidden'
import styled from 'styled-components'

const STYLES = {
  small: {
    border: 1,
    fontSize: 14,
    height: 24,
    icon: 16,
  },
  large: {
    border: 2,
    fontSize: 18,
    height: 36,
    icon: 24,
  },
}

const IconInput = ({ label, icon, width = 250, size, ...inputProps }) => {
  const styles = STYLES[size]
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--size': `${styles.icon / 16}rem` }}>
        <Icon id={icon} size={styles.icon} />
      </IconWrapper>
      <TextField
        {...inputProps}
        style={{
          '--border': `${styles.border}px`,
          '--font-size': `${styles.fontSize / 16}rem`,
          '--height': `${styles.height / 16}rem`,
          '--width': `${width / 16}rem`,
        }}
      />
    </Wrapper>
  )
}

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`

const TextField = styled.input`
  border: none;
  border-bottom: var(--border) solid ${COLORS.black};
  width: var(--width);
  height: var(--height);
  padding-left: var(--height);
  font-size: var(--font-size);
  font-weight: 700;
  color: inherit;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline-offset: ${2 / 16}rem;
  }
`

const IconWrapper = styled.span`
  position: absolute;
  top: 0;
  bottom: 0;
  height: var(--size);
  margin: auto 0;
  color: inherit;
`

export default IconInput
