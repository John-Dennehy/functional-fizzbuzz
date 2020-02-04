export const fizzbuzz = num => {
  if (isNaN(num)) return 'Invalid Number'
  if (isFizzAndBuzz(num)) return 'fizzbuzz'
  if (isFizz(num)) return 'fizz'
  if (isBuzz(num)) return 'buzz'
  return num
}

export const isFizz = num => num % 3 === 0
export const isBuzz = num => num % 5 === 0
export const isFizzAndBuzz = num => isFizz(num) && isBuzz(num)

