export function formatToday() {
  const date = new Date()

  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ]

  const daysOfWeek = [
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
    'Domingo'
  ]

  const dayString = daysOfWeek[date.getDay() - 1]
  const dayNumber = ('0' + date.getDate()).slice(-2)
  const month = months[date.getMonth()]
  const year = date.getFullYear()

  return `${dayString}, ${dayNumber} de ${month} de ${year}`
}

export function convertTimestampToDate({ timestamp }) {
  const date = new Date(timestamp * 1000)
  const year = date.getFullYear()
  const month = ('0' + (date.getMonth() + 1)).slice(-2)
  const day = ('0' + date.getDate()).slice(-2)

  return `${day}/${month}/${year}`
}
