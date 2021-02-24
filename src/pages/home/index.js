import React from 'react'

// Cd
import {
  CdHeader,
  CdBoxCurrentDate,
  CdFooter,
  CdCookiesBanner
} from '~/components'
import api from '~/services/api'
import {
  CdHead,
  CdSectionConversion,
  CdSectionHistoricalChart,
  CdInfo
} from './components'

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

  return (
    <>
      <CdHead />
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
