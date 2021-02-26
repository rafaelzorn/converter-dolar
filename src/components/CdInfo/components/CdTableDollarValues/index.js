import React from 'react'

// Cd
import { CdTable } from '~/components'
import { SYMBOLS } from '~/constants'
import { Number, Money } from '~/utils'
import { Container, Title } from './styles'

export function CdTableDollarValues(props) {
  const { currency } = props

  function renderHeader() {
    return ['Dólar', 'Real']
  }

  function renderBody() {
    const values = [
      { 'um dolár': 1 },
      { 'dois doláres': 2 },
      { 'cinco doláres': 5 },
      { 'dez doláres': 10 },
      { 'vinte e cinco doláres': 25 },
      { 'cinquenta doláres': 50 },
      { 'cem doláres': 100 },
      { 'mil doláres': 1000 }
    ]

    const body = []

    values.forEach((value, index) => {
      const text = Object.keys(value)[0]
      const dollar = value[Object.keys(value)[0]]
      let calculate =
        Number.convertStringToFloat({ value: currency.ask }) * parseInt(dollar)
      calculate = Money.formatMoney({
        value: calculate
      })

      body.push([
        `${SYMBOLS.DOLLAR} ${dollar} (${text})`,
        `${SYMBOLS.REAL} ${calculate}`
      ])
    })

    return body
  }

  return (
    <Container>
      <Title>Tabela de valores em dólar convertidos em real</Title>

      <CdTable header={renderHeader()} body={renderBody()} />
    </Container>
  )
}
