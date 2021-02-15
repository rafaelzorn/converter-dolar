import styled from 'styled-components'

// Cd
import { COLORS } from '~/styles/colors'

export const Section = styled.section`
  border-top: 20px solid ${COLORS.CATSKILL_WHITE};
`

export const Title = styled.h2`
  margin: 30px 0 50px 0;
  text-align: center;
  color: ${COLORS.RIVER_BED};
  text-transform: uppercase;

  @media (max-width: 425px) {
    font-size: 18px;
    max-width: 300px;
    margin: 30px auto;
  }
`
