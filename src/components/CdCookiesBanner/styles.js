import styled from 'styled-components'

// Cd
import { COLORS } from '~/styles'

export const Container = styled.div`
  display: ${props => (props.acceptCookies ? 'none' : 'block')};
  position: fixed;
  bottom: 0;
  background-color: #007dff;
  width: 100%;
`

export const Content = styled.div`
  padding: 15px;
  color: ${COLORS.WHITE};
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1440px) {
    flex-direction: column;
  }
`

export const BoxText = styled.div``

export const Text = styled.p`
  margin: 16px;
  font-size: 14px;

  @media (max-width: 1440px) {
    margin-bottom: 20px;
    text-align: center;
    font-size: 13px;
  }
`

export const StyledLink = styled.a`
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`

export const BoxButton = styled.div``

export const Button = styled.button`
  border: none;
  padding: 10px 30px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  background-color: #ffffff;
  cursor: pointer;
`
