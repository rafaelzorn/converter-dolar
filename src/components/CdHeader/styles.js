import styled from 'styled-components'

// Cd
import { COLORS } from '~/styles/colors'

export const Nav = styled.nav`
  box-shadow: 0 2px 10px 0 rgba(192, 200, 207, 0.22);
  background-color: ${COLORS.WHITE};
  padding: 10px 15px;
  position: relative;
  z-index: 999;
`

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
`

export const WrapperImage = styled.div`
  width: 50px;
`

export const Title = styled.h1`
  margin-left: 10px;
  color: ${COLORS.RIVER_BED};
  font-size: 22px;

  @media (max-width: 375px) {
    font-size: 18px;
  }
`
