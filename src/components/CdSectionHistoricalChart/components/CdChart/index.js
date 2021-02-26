import React from 'react'
import { Line } from 'react-chartjs-2'

// Cd
import { Date, Number, Money } from '~/utils'
import { SYMBOLS } from '~/constants'
import { COLORS } from '~/styles'
import { Container } from './styles'

export function CdChart(props) {
  const { items } = props

  function data() {
    const labels = []
    const data = []

    items.forEach((value, index) => {
      const date = Date.convertTimestampToDate({ timestamp: value.timestamp })

      labels.push(date)
      data.push(Number.convertStringToFloat({ value: value.ask }))
    })

    return {
      labels: labels,
      datasets: [
        {
          data: data,
          borderColor: COLORS.FRUIT_SALAD,
          backgroundColor: 'rgba(137, 255, 115, 0.1)',
          borderWidth: 2
        }
      ]
    }
  }

  function options() {
    return {
      legend: { display: false },
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        intersect: false,
        mode: 'index',
        displayColors: false,
        callbacks: {
          title: () => {
            return ''
          },
          label: tooltip => {
            return `${tooltip.label} - ${SYMBOLS.REAL} ${Money.formatMoney({
              value: tooltip.value
            })}`
          }
        }
      }
    }
  }

  return (
    <Container>
      <Line data={data()} options={options()} />
    </Container>
  )
}
