import React from 'react'

// Cd
import { Container, Outer, Inner, Symbol, Input } from './styles'

export function CdInput(props) {
  const { symbol, onChange, value, maxLength = 18 } = props

  return (
    <Container>
      <Outer>
        <Inner>
          <Symbol>{symbol}</Symbol>

          <Input
            type="text"
            onChange={onChange}
            value={value}
            maxLength={maxLength}
          />
        </Inner>
      </Outer>
    </Container>
  )
}
