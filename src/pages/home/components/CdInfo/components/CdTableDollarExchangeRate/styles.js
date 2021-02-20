import styled from 'styled-components'

// Cd
import { COLORS } from '~/styles'

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 40px;
  padding: 0 10px;
`

export const Title = styled.h2`
  margin: 0 0 10px 0;
  text-align: left;
  color: ${COLORS.RIVER_BED};
  text-transform: uppercase;
  font-size: 20px;

  @media (max-width: 425px) {
    font-size: 15px;
    margin: 30px 0;
  }
`
