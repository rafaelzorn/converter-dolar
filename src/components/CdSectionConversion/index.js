import React, { useState } from 'react'
import Image from 'next/image'

// Cd
import { Number } from '~/utils'
import { IMAGES, SYMBOLS } from '~/constants'
import { CdInput } from '../'
import { Section, WrapperImage, BoxInputs, WrapperInput } from './styles'

export function CdSectionConversion(props) {
  const { currency } = props

  const [foreign, setForeign] = useState(100)
  const [real, setReal] = useState(
    Number.convertFloatToInt({
      value: Number.convertStringToFloat({ value: currency.ask })
    })
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
      <BoxInputs>
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
      </BoxInputs>
    )
  }

  return (
    <Section>
      <WrapperImage>
        <Image
          src={IMAGES.FLAG_USD}
          width={100}
          height={100}
          alt="Logo da moeda USD"
        />
      </WrapperImage>

      {renderInputs()}
    </Section>
  )
}
