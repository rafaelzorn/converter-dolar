import styled from 'styled-components'

// Cd
import { COLORS } from '~/styles'

export const Container = styled.div`
  background-color: ${COLORS.MALIBU};
  display: inline-block;
  width: 100%;
  border: 1px solid #58afff;
`

export const Header = styled.div`
  display: block;
  flex-grow: 1;
  width: 100%;
  background-color: inherit;
  border: none;
  cursor: pointer;
  outline: none;
  text-align: left;
  color: ${COLORS.WHITE};
  letter-spacing: 0.7px;
  font-weight: bold;
  font-size: 16px;
  border-bottom: ${props => (props.border ? 0 : 2)}px solid ${COLORS.WHITE};
  text-transform: uppercase;
`

export const Title = styled.h2`
  padding: 15px 10px;
  margin: 0;
  font-size: 14px;
`

export const Content = styled.div`
  border-left: none;
  border-right: none;
  background-color: ${COLORS.WHITE};
  padding: 10px 20px;
  display: ${props => (props.show ? 'block' : 'none')};

  p {
    text-align: justify;
    color: ${COLORS.RIVER_BED};
    margin-bottom: 10px;
    font-size: 13px;
  }
`
