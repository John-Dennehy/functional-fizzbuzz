import { fizzbuzz, isFizz, isBuzz } from './index.js'

describe('fizzbuzz', () => {
  it('returns the number passed to it, if not a multiple of 3 or 5', () => {
    expect(fizzbuzz(1)).toBe(1)
    expect(fizzbuzz(2)).toBe(2)
    expect(fizzbuzz(3)).not.toBe(3)
    expect(fizzbuzz(4)).toBe(4)
    expect(fizzbuzz(5)).not.toBe(5)
    expect(fizzbuzz(15)).not.toBe(15)
  });
  it('returns fizz if passed a multiple of 3', () => {
    expect(fizzbuzz(3)).toBe('fizz')
    expect(fizzbuzz(6)).toBe('fizz')
    expect(fizzbuzz(9)).toBe('fizz')
    expect(fizzbuzz(1)).not.toBe('fizz')
    expect(fizzbuzz(5)).not.toBe('fizz')
    expect(fizzbuzz(0)).not.toBe('fizz')
  });
});

describe('isFizz', () => {
  it('should return true if passed a multiple of 3', () => {
    expect(isFizz(3)).toBe(true)
  });
  it('should return false if it is not a multiple of 3', () => {
    expect(isFizz(2)).toBe(false)
  });
});

describe('isBuzz', () => {
  it('should return true if passed a multiple of 5', () => {
    expect(isBuzz(5)).toBe(true)
  });
  it('should return false if it is not a multiple of 5', () => {
    expect(isBuzz(3)).toBe(false)
  });
});

