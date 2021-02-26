import React from 'react'
import Head from 'next/head'

// Cd
import {
  CdHeader,
  CdBoxCurrentDate,
  CdFooter,
  CdCookiesBanner,
  CdSectionConversion,
  CdSectionHistoricalChart,
  CdInfo
} from '~/components'
import api from '~/services/api'

export async function getStaticProps() {
  let response = await api.get('all/USD-BRL')

  const { USD } = response.data

  response = await api.get('daily/USD-BRL/30')

  const { data } = response

  return {
    props: {
      currency: USD,
      items: data
    },
    revalidate: 180
  }
}

export default function Home(props) {
  const { currency, items } = props

  function renderHead() {
    return (
      <Head>
        <title>Converter Dólar: Cotação Comercial. Valor e Preço!</title>

        <meta
          name="description"
          content="Converter Dólar. Valor da cotação do dólar americano comercial hoje. Preço do dólar sempre atualizado!"
        />

        <meta
          name="keywords"
          content="converter dolar,converter dolar,cotação do dolar hoje,preço do dolar hoje,valor do dolar hoje,cotação"
        />

        <link rel="canonical" href="https://converterdolar.com/" />
      </Head>
    )
  }

  return (
    <>
      {renderHead()}

      <CdHeader />
      <CdBoxCurrentDate />

      <CdSectionConversion currency={currency} />
      <CdSectionHistoricalChart items={items} />
      <CdInfo currency={currency} items={items} />

      <CdFooter />
      <CdCookiesBanner />
    </>
  )
}
