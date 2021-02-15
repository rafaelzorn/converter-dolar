import React, { useState } from 'react'
import Image from 'next/image'

// Cd
import { TEXTS, IMAGES, SYMBOLS } from '~/constants'
import { CdHead, CdInput } from './components'
import { CdHeader, CdBoxCurrentDate } from '~/components'
import { Number } from '~/utils'
import { Section, Container, WrapperImage, WrapperInput } from './styles'
import api from '~/services/api'

export async function getStaticProps(context) {
  const response = await api.get('all/USD-BRL')

  const { USD } = response.data

  return {
    props: {
      currency: USD
    }
  }
}

export default function Home(props) {
  const { currency } = props

  const [foreign, setForeign] = useState(100)
  const [real, setReal] = useState(
    Number.convertFloatToInt({ value: currency.ask })
  )

  function handleForeing({ value }) {
    setForeign(value)
    setReal(Number.calculateForeing({ valueCurrency: currency.ask, value }))
  }

  function handleReal({ value }) {
    setReal(value)
    setForeign(Number.calculateReal({ valueCurrency: currency.ask, value }))
  }

  function renderInputs() {
    return (
      <>
        <WrapperInput>
          <CdInput
            symbol={SYMBOLS.DOLLAR}
            onInputChange={value => handleForeing({ value })}
            value={foreign}
          />
        </WrapperInput>

        <WrapperInput>
          <CdInput
            symbol={SYMBOLS.REAL}
            onInputChange={value => handleReal({ value: value })}
            value={real}
          />
        </WrapperInput>
      </>
    )
  }

  function renderContent() {
    return (
      <Section>
        <Container>
          <WrapperImage>
            <Image
              src={IMAGES.FLAG_USD}
              width={100}
              height={100}
              alt={TEXTS.LOGO_CURRENCY_USD}
            />
          </WrapperImage>

          {renderInputs()}
        </Container>
      </Section>
    )
  }

  return (
    <>
      <CdHead />
      <CdHeader />
      <CdBoxCurrentDate />
      {renderContent()}
    </>
  )
}
