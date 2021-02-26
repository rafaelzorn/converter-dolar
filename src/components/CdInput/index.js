import React from 'react'

// Cd
import { Container, Outer, Inner, Symbol, Input } from './styles'

export function CdInput(props) {
  const {
    symbol,
    onInputChange,
    value,
    separator = ',',
    delimiter = '.',
    precision = 2
  } = props

  return (
    <Container>
      <Outer>
        <Inner>
          <Symbol>{symbol}</Symbol>

          <Input
            onInputChange={onInputChange}
            symbol={symbol}
            value={value}
            delimiter={delimiter}
            separator={separator}
            precision={precision}
          />
        </Inner>
      </Outer>
    </Container>
  )
}
