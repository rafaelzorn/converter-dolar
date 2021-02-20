import React, { useState, useEffect } from 'react'
import Link from 'next/link'

// Cd
import { TEXTS, ROUTES, COOKIES } from '~/constants'
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
            {TEXTS.TEXT_COOKIES}{' '}
            <Link href={ROUTES.PRIVACY}>
              <StyledLink>{TEXTS.PRIVACY_POLICY}</StyledLink>
            </Link>
            {' - '}
            <Link href={ROUTES.TERMS}>
              <StyledLink>{TEXTS.TERMS_OF_USE}</StyledLink>
            </Link>
          </Text>
        </BoxText>
        <BoxButton>
          <Button onClick={() => handleAcceptCookies()}>{TEXTS.ACCEPT}</Button>
        </BoxButton>
      </Content>
    </Container>
  )
}
