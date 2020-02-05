export const fizzbuzz = num => {
  if (isNaN(num)) return 'Invalid Number'
  let output = ''
  output += addFizz(num)
  output += addBuzz(num)
  if (output === '') output = num
  return output
}

const isMultipleOf = multiple => num => num % multiple === 0
const outputIfMatching = criteria => returnString => num => {
  if (criteria(num)) return returnString
  return ''
}

const addFizz = outputIfMatching(isMultipleOf(3))('fizz')
const addBuzz = outputIfMatching(isMultipleOf(5))('buzz')
