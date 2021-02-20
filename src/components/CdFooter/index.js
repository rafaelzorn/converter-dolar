import React from 'react'
import Link from 'next/link'

// Cd
import { TEXTS, ROUTES } from '~/constants'
import { Footer, Container, Content, Span, StyledLink } from './styles'

export function CdFooter() {
  return (
    <Footer>
      <Container>
        <Content>
          <Span>{TEXTS.COPYRIGHT}</Span>
          <Span occult>- {TEXTS.ALL_RIGHTS_RESERVED}</Span>
          <Span occult>|</Span>
          <Link href={ROUTES.PRIVACY}>
            <StyledLink occult>{TEXTS.PRIVACY_POLICY}</StyledLink>
          </Link>
          <Span occult>|</Span>
          <Link href={ROUTES.TERMS}>
            <StyledLink>{TEXTS.TERMS_OF_USE}</StyledLink>
          </Link>
        </Content>
      </Container>
    </Footer>
  )
}
