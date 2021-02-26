import styled from 'styled-components'
import SimpleCurrencyInput from 'react-simple-currency'

// Cd
import { COLORS } from '~/styles'

export const Container = styled.div`
  border: 1px solid ${COLORS.WHITE};
  border-radius: 15px;
  padding: 8px;
  box-shadow: 9px 9px 16px rgb(189 189 189 / 60%),
    -9px -9px 16px rgb(255 255 255 / 50%);
  max-width: 400px;
  color: ${COLORS.SILVER_CHALICE};
`

export const Outer = styled.div`
  display: flex;
  border-radius: 10px;
  box-shadow: inset 10px 10px 15px -10px #c3c3c3,
    inset -10px -10px 15px -10px ${COLORS.WHITE};
  height: 45px;
`

export const Inner = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  flex: 1;
`

export const Symbol = styled.span`
  font-size: 18px;
  min-width: 60px;
  display: block;
  text-align: right;
`

export const Input = styled(SimpleCurrencyInput)`
  height: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  font-size: 18px;
  text-align: right;
  width: 100%;
  padding: 0 10px;
  color: ${COLORS.SILVER_CHALICE};
`
