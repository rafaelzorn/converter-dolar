import React from 'react'

// Cd
import { TEXTS } from '~/constants'
import { Money } from '~/utils'
import { Section, Title, ContainerAccordions } from './styles'
import { CdAccordion } from '~/components'

export function CdInfo(props) {
  const { currency } = props

  function formatContentFirstAccordion() {
    return TEXTS.HOME_ACCORDION_CONTENT_1_PARAGRAPH_1.replace(
      '##value_dollar##',
      Money.formatMoney({ value: currency.ask })
    )
  }

  const accordionItems = [
    {
      title: TEXTS.HOME_ACCORDION_TITLE_1,
      content: `
        <p>
        ${formatContentFirstAccordion()}
        </p>
      `
    },
    {
      title: TEXTS.HOME_ACCORDION_TITLE_2,
      content: `
        <p>
          ${TEXTS.HOME_ACCORDION_CONTENT_2_PARAGRAPH_1}
        </p>
        <p>
          ${TEXTS.HOME_ACCORDION_CONTENT_2_PARAGRAPH_2}
        </p>
        <p>
          ${TEXTS.HOME_ACCORDION_CONTENT_2_PARAGRAPH_3}
        </p>
      `
    },
    {
      title: TEXTS.HOME_ACCORDION_TITLE_3,
      content: `
        <p>
          ${TEXTS.HOME_ACCORDION_CONTENT_3_PARAGRAPH_1}
        </p>
      `
    },
    {
      title: TEXTS.HOME_ACCORDION_TITLE_4,
      content: `
        <p>
          ${TEXTS.HOME_ACCORDION_CONTENT_4_PARAGRAPH_1}
        </p>
        <p>
          ${TEXTS.HOME_ACCORDION_CONTENT_4_PARAGRAPH_2}
        </p>
        <p>
          ${TEXTS.HOME_ACCORDION_CONTENT_4_PARAGRAPH_3}
        </p>
      `
    }
  ]

  return (
    <Section>
      <Title>{TEXTS.INFORMATIONS}</Title>

      <ContainerAccordions>
        <CdAccordion items={accordionItems} />
      </ContainerAccordions>
    </Section>
  )
}
