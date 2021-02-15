import React from 'react'

// Cd
import { CdHeader, CdBoxCurrentDate } from '~/components'
import {
  CdHead,
  CdSectionConversion,
  CdSectionHistoricalChart
} from './components'
import api from '~/services/api'

export async function getStaticProps(context) {
  const response = await api.get('all/USD-BRL')

  const { USD } = response.data

  return {
    props: {
      currency: USD
    }
  }
}

export default function Home(props) {
  const { currency } = props

  return (
    <>
      <CdHead />
      <CdHeader />
      <CdBoxCurrentDate />

      <CdSectionConversion currency={currency} />
      <CdSectionHistoricalChart />
    </>
  )
}
