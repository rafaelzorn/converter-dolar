import { createGlobalStyle } from 'styled-components'

import { COLORS } from './colors'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${COLORS.WHITE};
    font-family: 'Lexend Mega', sans-serif;
  }

  a {
    cursor: pointer;
  }
`
