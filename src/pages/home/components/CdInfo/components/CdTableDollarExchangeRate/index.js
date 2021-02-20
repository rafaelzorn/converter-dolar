import React from 'react'

// Cd
import { CdTable } from '~/components'
import { TEXTS, SYMBOLS } from '~/constants'
import { Date, Money } from '~/utils'
import { Container, Title } from './styles'

export function CdTableDollarExchangeRate(props) {
  const { items } = props

  function renderHeader() {
    return [TEXTS.DATE, TEXTS.QUOTATION]
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
      <Title>{TEXTS.TABLE_DOLLAR_EXCHANGE_RATE}</Title>

      <CdTable header={renderHeader()} body={renderBody()} />
    </Container>
  )
}
