import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Cd
import { ROUTES, IMAGES } from '~/constants'
import { Nav, WrapperImage, Title, StyledLink } from './styles'

export function CdHeader() {
  return (
    <Nav>
      <Link href={ROUTES.HOME}>
        <StyledLink>
          <WrapperImage>
            <Image src={IMAGES.LOGO} width={128} height={128} alt="Logo" />
          </WrapperImage>
          <Title>Converter Dólar</Title>
        </StyledLink>
      </Link>
    </Nav>
  )
}
