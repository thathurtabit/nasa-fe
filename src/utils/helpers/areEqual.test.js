import { areEqual } from './areEqual';

describe('Testing areEqual function', () => {
  it('Should return false', () => {
    expect(areEqual({ a: 1, b: 2 }, { a: 1, b: 3 })).toBeFalsy();
  });
  it('Should return true', () => {
    expect(areEqual({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3 })).toBeTruthy();
  });
});
