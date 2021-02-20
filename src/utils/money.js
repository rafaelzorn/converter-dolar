export function formatMoney({ value }) {
  let money = parseFloat(value).toFixed(2)

  money = money.toString().replace(/\D/g, '')
  money = money.toString().replace(/(\d)(\d{8})$/, '$1.$2')
  money = money.toString().replace(/(\d)(\d{5})$/, '$1.$2')
  money = money.toString().replace(/(\d)(\d{2})$/, '$1,$2')

  return money
}
