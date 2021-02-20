import styled from 'styled-components'

// Cd
import { COLORS } from '~/styles'

export const Section = styled.section`
  border-top: 20px solid ${COLORS.CATSKILL_WHITE};
  margin-bottom: 30px;
`

export const Title = styled.h2`
  margin: 30px 0 50px 0;
  text-align: center;
  color: ${COLORS.RIVER_BED};
  text-transform: uppercase;
  font-size: 22px;

  @media (max-width: 425px) {
    font-size: 18px;
    max-width: 300px;
    margin: 30px auto;
  }
`
