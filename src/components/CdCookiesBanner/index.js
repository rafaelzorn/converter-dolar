import React, { useState, useEffect } from 'react'
import Link from 'next/link'

// Cd
import { ROUTES, COOKIES } from '~/constants'
import {
  Container,
  Content,
  BoxText,
  Text,
  StyledLink,
  BoxButton,
  Button
} from './styles'

export function CdCookiesBanner() {
  const [acceptCookies, setAcceptCookies] = useState(false)

  useEffect(() => {
    setAcceptCookies(localStorage.getItem(COOKIES.ACCEPT_COOKIES))
  }, [])

  function handleAcceptCookies() {
    localStorage.setItem(COOKIES.ACCEPT_COOKIES, true)

    setAcceptCookies(true)
  }

  return (
    <Container acceptCookies={acceptCookies}>
      <Content>
        <BoxText>
          <Text>
            Nosso site usa cookies para melhorar a navegação. Ao utilizar este
            site, você concorda com essas condições.{' '}
            <Link href={ROUTES.PRIVACY}>
              <StyledLink>Política de Privacidade</StyledLink>
            </Link>
            {' - '}
            <Link href={ROUTES.TERMS}>
              <StyledLink>Termos de Uso</StyledLink>
            </Link>
          </Text>
        </BoxText>
        <BoxButton>
          <Button onClick={() => handleAcceptCookies()}>Aceito</Button>
        </BoxButton>
      </Content>
    </Container>
  )
}
