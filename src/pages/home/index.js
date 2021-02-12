import React, { useState } from 'react'
import Image from 'next/image'

// Cd
import { TEXTS, IMAGES } from '~/constants'
import { CdHead, CdInput } from './components'
import { CdHeader, CdBoxCurrentDate } from '~/components'
import { Section, Container, WrapperImage, WrapperInput } from './styles'

export default function Home() {
  const [real, setReal] = useState('0,00')
  const [foreign, setForeign] = useState('0,00')

  function handleForeing({ value }) {
    setForeign(value)
  }

  function handleReal({ value }) {
    setReal(value)
  }

  function renderInputs() {
    return (
      <>
        <WrapperInput>
          <CdInput
            symbol="US$"
            onChange={e => handleForeing({ value: e.target.value })}
            value={foreign}
          />
        </WrapperInput>

        <WrapperInput>
          <CdInput
            symbol="R$"
            onChange={e => handleReal({ value: e.target.value })}
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
