import { TEXTS } from '~/constants'

export function formatToday() {
  const date = new Date()

  const months = [
    TEXTS.JANUARY,
    TEXTS.FEBRUARY,
    TEXTS.MARCH,
    TEXTS.APRIL,
    TEXTS.MAY,
    TEXTS.JUNE,
    TEXTS.JULY,
    TEXTS.AUGUST,
    TEXTS.SEPTEMBER,
    TEXTS.OCTOBER,
    TEXTS.NOVEMBER,
    TEXTS.DECEMBER
  ]

  const daysOfWeek = [
    TEXTS.MONDAY,
    TEXTS.TUESDAY,
    TEXTS.WENDNESDAY,
    TEXTS.THURSDAY,
    TEXTS.FRIDAY,
    TEXTS.SATURDAY,
    TEXTS.SUNDAY
  ]

  const dayString = daysOfWeek[date.getDay() - 1]
  const dayNumber = ('0' + date.getDate()).slice(-2)
  const month = months[date.getMonth()]
  const year = date.getFullYear()

  return `${dayString}, ${dayNumber} de ${month} de ${year}`
}
