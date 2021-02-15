export function convertFloatToInt({ value }) {
  return parseInt(parseFloat(value).toFixed(2).replace('.', ''))
}

export function convertStringToFloat({ value }) {
  return parseFloat(value).toFixed(2)
}

export function calculateForeing({ valueCurrency, value }) {
  let calculate = (value / 100).toFixed(2)
  calculate = (
    calculate * convertStringToFloat({ value: valueCurrency })
  ).toFixed(2)
  calculate = calculate.replace('.', '')
  calculate = parseInt(calculate)

  return calculate
}

export function calculateReal({ valueCurrency, value }) {
  let calculate = (value / 100).toFixed(2)
  calculate = (
    calculate / convertStringToFloat({ value: valueCurrency })
  ).toFixed(2)
  calculate = calculate.replace('.', '')
  calculate = parseInt(calculate)

  return calculate
}
