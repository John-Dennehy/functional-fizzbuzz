export const fizzbuzz = num => {
  if (isNaN(num)) return 'Invalid Number'
  if (isFizz(num) && isBuzz(num)) return 'fizzbuzz'
  if (isFizz(num)) return 'fizz'
  if (isBuzz(num)) return 'buzz'
  return num
}

const isMultipleOf = multiple => num => num % multiple === 0
export const isFizz = isMultipleOf(3)
export const isBuzz = isMultipleOf(5)

