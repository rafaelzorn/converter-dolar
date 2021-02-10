import React from 'react'
import Link from 'next/link'

// Cd
import { Images } from '~/assets'
import { TEXTS, ROUTES } from '~/constants'
import { Nav, ImageLogo, Title, StyledLink } from './styles'

export function CdHeader() {
  return (
    <Nav>
      <Link href={ROUTES.HOME}>
        <StyledLink>
          <ImageLogo src={Images.logo} />
          <Title>{TEXTS.CONVERT_DOLLAR}</Title>
        </StyledLink>
      </Link>
    </Nav>
  )
}
