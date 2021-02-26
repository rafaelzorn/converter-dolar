import styled from 'styled-components'

// Cf
import { COLORS } from '~/styles'

export const Section = styled.section`
  flex: 1 1 0%;
  flex-direction: column;
  display: flex;
  padding: 0 15px;
`

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto 0 auto;
  padding: 50px 0;
`

export const H1 = styled.h1`
  text-align: center;
  margin-bottom: 50px;
  text-transform: uppercase;
  color: ${COLORS.RIVER_BED};
`

export const Text = styled.p`
  text-align: justify;
  font-size: 14px;
  margin-bottom: 15px;
`

export const H2 = styled.h2`
  color: ${COLORS.RIVER_BED};
  text-transform: uppercase;
  margin-bottom: 20px;
  font-size: 20px;

  @media (max-width: 425px) {
    font-size: 18px;
  }
`

export const H3 = styled.h3`
  color: ${COLORS.SLATE_GRAY};
  margin-bottom: 20px;
  text-transform: uppercase;
  font-size: 18px;

  @media (max-width: 425px) {
    font-size: 16px;
  }
`

export const Ul = styled.ul`
  padding: 0;
  list-style-type: none;
`

export const Li = styled.li`
  text-align: justify;
  font-size: 14px;
  margin-bottom: 15px;
`
