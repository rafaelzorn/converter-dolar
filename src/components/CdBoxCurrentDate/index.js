import React from 'react'

import { Date } from '~/utils'
import { Container, StyledDate } from './styles'

export function CdBoxCurrentDate() {
  return (
    <Container>
      <StyledDate>{Date.formatToday()}</StyledDate>
    </Container>
  )
}
