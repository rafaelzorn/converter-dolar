import React from 'react'
import Link from 'next/link'

import { Images } from '~/assets'
import { TEXTS, ROUTES } from '~/constants'
import { Container, ImageLogo, Title, StyledLink } from './styles'

export function CdHeader() {
  return (
    <Container>
      <Link href={ROUTES.HOME}>
        <StyledLink>
          <ImageLogo src={Images.logo} />
          <Title>{TEXTS.CONVERT_DOLLAR}</Title>
        </StyledLink>
      </Link>
    </Container>
  )
}
