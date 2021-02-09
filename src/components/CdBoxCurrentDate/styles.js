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
  font-size: 14px;
  color: ${COLORS.GRAY};

  @media (max-width: 375px) {
    justify-content: center;
    text-align: center;
    line-height: 1.2;
    padding: 20px 60px;
  }
`
