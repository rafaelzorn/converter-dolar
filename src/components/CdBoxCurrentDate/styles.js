import styled from 'styled-components'

import { COLORS } from '~/styles/colors'

export const Container = styled.div`
  background-color: #f7fafb;
`

export const StyledDate = styled.span`
  max-width: 1536px;
  margin: 0 auto;
  display: flex;
  padding: 20px;
  font-size: 16px;
  color: ${COLORS.GRAY};
  letter-spacing: 0.5px;

  @media (max-width: 320px) {
    justify-content: center;
    text-align: center;
    line-height: 1.2;
    padding: 20px 50px;
  }
`
