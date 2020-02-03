import { fizzbuzz, fizz } from './index.js'

describe('fizzbuzz', () => {
  it('fizzbuzz', () => {
    expect(fizzbuzz(1)).toEqual(1)
  });

});

describe('fizz', () => {
  it('should return fizz if passed a multiple of 3', () => {
    expect(fizz(3)).toEqual('fizz')
  });
  it('should return the number if it is not a multiple of 3', () => {
    expect(fizz(2)).toEqual(2)
  });
});
