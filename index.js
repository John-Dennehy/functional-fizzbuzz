export const fizzbuzz = number => {
  return fizz(number)
}

export const fizz = number => {
  if (number === 3) return 'fizz'
  return number
}
