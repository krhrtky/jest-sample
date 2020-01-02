import { str, toNumber } from '../main';

describe('main', () => {
  it('variable check', () => {
    expect(str).toEqual('sample');
  });
  it('variable not equal check', () => {
    expect(str).not.toEqual('hoge');
  });
  it('args is numeric string', () => {
    expect(toNumber('10')).toBe(10)
  });
  it('args is not numeric string', () => {
    expect(toNumber('string')).toBe(0)
  });
});
