import styled from 'styled-components'

// Cd
import { COLORS } from '~/styles'

export const Footer = styled.footer`
  background-color: ${COLORS.SHARK};
`

export const Container = styled.div`
  max-width: 1536px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    margin: unset;
  }
`

export const Content = styled.div`
  color: ${COLORS.PALE_SKY};
  font-weight: 700;
  font-size: 14px;
  padding: 30px 15px;
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const Span = styled.span`
  margin-right: 5px;

  @media (max-width: 768px) {
    margin-bottom: 5px;
    display: ${props => (props.occult ? 'none' : 'block')};
  }
`

export const StyledLink = styled.a`
  cursor: pointer;
  text-decoration: underline;
  margin-right: 5px;

  &:hover {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    margin-bottom: 5px;
  }
`
