import React from 'react'

// Cd
import { CdTable } from '~/components'
import { SYMBOLS } from '~/constants'
import { Date, Money } from '~/utils'
import { Container, Title } from './styles'

export function CdTableDollarExchangeRate(props) {
  const { items } = props

  function renderHeader() {
    return ['Data', 'Cotação']
  }

  function renderBody() {
    const body = []

    items.slice(0, 5).forEach((value, index) => {
      body.push([
        Date.convertTimestampToDate({ timestamp: value.timestamp }),
        `${SYMBOLS.REAL} ${Money.formatMoney({
          value: value.ask
        })}`
      ])
    })

    return body
  }

  return (
    <Container>
      <Title>Cotação do dólar comercial nos últimos dias</Title>

      <CdTable header={renderHeader()} body={renderBody()} />
    </Container>
  )
}
