import { createGlobalStyle } from 'styled-components'

// Cd
import { COLORS } from './colors'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${COLORS.MYSTIC};
    font-family: 'Lexend Mega', sans-serif;
  }

  a {
    cursor: pointer;
  }
`
