import { fizzbuzz, isFizz, isBuzz } from './index.js'

describe('fizzbuzz', () => {
  it('returns the number passed to it, if not a multiple of 3 or 5', () => {
    expect(fizzbuzz(1)).toBe(1)
    expect(fizzbuzz(3)).not.toBe(3)
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