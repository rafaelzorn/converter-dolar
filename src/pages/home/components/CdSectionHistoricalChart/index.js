import React from 'react'

// Cd
import { Section, Title } from './styles'
import { CdChart } from './components'

export function CdSectionHistoricalChart(props) {
  const { items } = props

  return (
    <Section>
      <Title>Gráfico do histórico do dólar nos últimos 30 dias</Title>

      <CdChart items={items} />
    </Section>
  )
}
