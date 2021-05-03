import { COLORS } from '../../constants'
import Icon from '../Icon'
import React from 'react'
import { getDisplayedValue } from './Select.helpers'
import styled from 'styled-components'

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children)

  return (
    <Wrapper>
      <BrowserSelect value={value} onChange={onChange}>
        {children}
      </BrowserSelect>
      <DesignReplacer>
        {displayedValue}
        <ChevronWrapper style={{ '--size': '24px' }}>
          <Icon id='chevron-down' size={24} strokeWidth={1} />
        </ChevronWrapper>
      </DesignReplacer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`

const BrowserSelect = styled.select`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`

const DesignReplacer = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  color: ${COLORS.gray700};
  padding: 12px 52px 12px 16px;
  font-family: Roboto;
  font-size: 1rem;

  ${BrowserSelect}:hover + & {
    color: ${COLORS.black};
  }

  ${BrowserSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`

const ChevronWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  width: var(--size);
  height: var(--size);
  margin: auto;
  pointer-events: none;
`

export default Select
