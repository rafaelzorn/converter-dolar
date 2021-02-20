import styled from 'styled-components'

// Cd
import { COLORS } from '~/styles'

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

export const Th = styled.th`
  background-color: ${COLORS.MALIBU};
  border: none;
  text-align: left;
  color: ${COLORS.WHITE};
  padding: 10px;
  text-transform: uppercase;
  font-size: 14px;

  @media (max-width: 425px) {
    font-size: 13px;
  }
`

export const Td = styled.td`
  border-bottom: 1px solid #d4d4d4;
  text-align: left;
  padding: 10px;
  font-size: 14px;

  @media (max-width: 425px) {
    font-size: 13px;
  }
`
