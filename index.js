export const fizzbuzz = number => {
  if (!isValidNumber(number)) return 'Invalid number'
  if (isFizzBuzz(number)) return 'fizzbuzz'
  if (isFizz(number)) return 'fizz'
  if (isBuzz(number)) return 'buzz'
  return number
}

const isFizzBuzz = number => {
  return (isFizz(number) && isBuzz(number))
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
