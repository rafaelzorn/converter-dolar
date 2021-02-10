import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Cd
import { TEXTS, ROUTES, IMAGES } from '~/constants'
import { Nav, WrapperImage, Title, StyledLink } from './styles'

export function CdHeader() {
  return (
    <Nav>
      <Link href={ROUTES.HOME}>
        <StyledLink>
          <WrapperImage>
            <Image
              src={IMAGES.LOGO}
              width={128}
              height={128}
              alt={TEXTS.LOGO}
            />
          </WrapperImage>
          <Title>{TEXTS.CONVERT_DOLLAR}</Title>
        </StyledLink>
      </Link>
    </Nav>
  )
}
