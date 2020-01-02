import { str } from '../main';

describe('main', () => {
  it('varable check', () => {
    expect(str).toEqual('sample');
  });
  it('varable not equeal check', () => {
    expect(str).not.toEqual('hoge');
  });
});
