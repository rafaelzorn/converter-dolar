import React from 'react'

// Cd
import { CdHead } from './components'
import { CdHeader, CdBoxCurrentDate } from '~/components'
import { Section } from './styles'

export default function Home() {
  function renderContent() {
    return (
      <Section>
        <p>Home</p>
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
