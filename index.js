export const fizzbuzz = number => {
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

