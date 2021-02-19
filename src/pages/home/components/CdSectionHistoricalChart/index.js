import React from 'react'

// Cd
import { TEXTS } from '~/constants'
import { Section, Title } from './styles'
import { CdChart } from './components'

export function CdSectionHistoricalChart(props) {
  const { items } = props

  return (
    <Section>
      <Title>{TEXTS.SECTION_HISTORICAL_CHART_TITLE}</Title>

      <CdChart items={items} />
    </Section>
  )
}
