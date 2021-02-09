import React from 'react'

// Cd
import { CdHead } from './components'
import { CdHeader, CdBoxCurrentDate } from '~/components'
import { Container } from './styles'

export default function Home() {
  function renderContent() {
    return <Container />
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
