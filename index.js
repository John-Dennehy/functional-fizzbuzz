export const fizzbuzz = number => {
  if (!isValidNumber(number)) return 'Invalid number'
  if (isFizz(number)) return 'fizz'
  if (isBuzz(number)) return 'buzz'
  return number
}

export const isFizz = number => {
  return (number % 3 === 0)
}

export const isBuzz = number => {
  return (number % 5 === 0)
}

const isValidNumber = number => {
  if (number < 1) return false
  return true
}
