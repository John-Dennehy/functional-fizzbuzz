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
  it("return value contains 'fizz' only if passed a multiple of 3", () => {
    expect(fizzbuzz(3)).toContain('fizz')
    expect(fizzbuzz(6)).toContain('fizz')
    expect(fizzbuzz(9)).toContain('fizz')
    expect(fizzbuzz(15)).toContain('fizz')
    expect(fizzbuzz(1)).not.toContain('fizz')
    expect(fizzbuzz(5)).not.toContain('fizz')
  });
  it("return value contains 'buzz' only if passed a multiple of 5", () => {
    expect(fizzbuzz(5)).toContain('buzz')
    expect(fizzbuzz(10)).toContain('buzz')
    expect(fizzbuzz(15)).toContain('buzz')
    expect(fizzbuzz(1)).not.toContain('buzz')
    expect(fizzbuzz(3)).not.toContain('buzz')
  });
  it('returns fizzbuzz only if passed a multiple of 15', () => {
    expect(fizzbuzz(15)).toContain('fizzbuzz')
    expect(fizzbuzz(30)).toContain('fizzbuzz')
    expect(fizzbuzz(1)).not.toContain('fizzbuzz')
    expect(fizzbuzz(3)).not.toContain('fizzbuzz')
    expect(fizzbuzz(5)).not.toContain('fizzbuzz')
  });
});

describe('isFizz', () => {
  it('should return true if passed a multiple of 3', () => {
    expect(isFizz(3)).toBe(true)
    expect(isFizz(6)).toBe(true)
  });
  it('should return false if it is not a multiple of 3', () => {
    expect(isFizz(2)).toBe(false)
  });
});

describe('isBuzz', () => {
  it('should return true if passed a multiple of 5', () => {
    expect(isBuzz(5)).toBe(true)
    expect(isBuzz(10)).toBe(true)
  });
  it('should return false if it is not a multiple of 5', () => {
    expect(isBuzz(3)).toBe(false)
  });
});

