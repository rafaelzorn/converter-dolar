import React from 'react'
import GlobalStyle from '../styles/global'

function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default App
