import React from 'react'
import Link from 'next/link'

// Cd
import { ROUTES } from '~/constants'
import { Footer, Container, Content, Span, StyledLink } from './styles'

export function CdFooter() {
  return (
    <Footer>
      <Container>
        <Content>
          <Span>@2021 ConverterDolar</Span>
          <Span occult>- Todos os direitos reservados</Span>
          <Span occult>|</Span>
          <Link href={ROUTES.PRIVACY}>
            <StyledLink occult>Política de Privacidade</StyledLink>
          </Link>
          <Span occult>|</Span>
          <Link href={ROUTES.TERMS}>
            <StyledLink>Termos de Uso</StyledLink>
          </Link>
        </Content>
      </Container>
    </Footer>
  )
}
