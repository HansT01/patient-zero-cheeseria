export const formatMoney = (money: number) => {
  return `$${+money.toFixed(2)}`
}

export const formatQuantity = (quantity: number) => {
  if (quantity < 1) {
    return `${+(quantity * 1000).toFixed(2)}g`
  }
  return `${quantity}kg`
}
