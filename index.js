export const fizzbuzz = num => {
  if (isLessThanOne(num)) return 'Invalid number'
  if (isFizzBuzz(num)) return 'fizzbuzz'
  if (isFizz(num)) return 'fizz'
  if (isBuzz(num)) return 'buzz'
  return num
}
const isLessThanOne = num => num < 1

const isFizzBuzz = num => isFizz(num) && isBuzz(num)

export const isFizz = num => num % 3 === 0

export const isBuzz = num => num % 5 === 0
