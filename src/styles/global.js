import { createGlobalStyle } from 'styled-components'

import { COLORS } from './colors'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lexend+Mega&display=swap');

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
