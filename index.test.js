import { fizzbuzz, fizz } from './index.js'

describe('fizzbuzz', () => {
  it('returns the number passed to it, if not a multiple of 3 or 5', () => {
    expect(fizzbuzz(1)).toBe(1)
    expect(fizzbuzz(3)).not.toBe(3)
  });
});

describe('fizz', () => {
  it('should return fizz if passed a multiple of 3', () => {
    expect(fizz(3)).toBe('fizz')
  });
  it('should return the number if it is not a multiple of 3', () => {
    expect(fizz(2)).toBe(2)
  });
});
