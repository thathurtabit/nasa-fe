import { hasKey } from './hasKey';

describe('Testing hasKey function', () => {
  it('Should return false', () => {
    expect(hasKey({ a: 1, b: 2 }, 'c')).toBeFalsy();
  });
  it('Should return true', () => {
    expect(hasKey({ a: 1, b: 2, c: 3 }, 'c')).toBeTruthy();
  });
});
