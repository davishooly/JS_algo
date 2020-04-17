import { decompose } from './index'

describe('number decomposition', () => {
  it('number decomposition', () => {
    //compares deep equality
    expect(decompose(50)).toStrictEqual([1, 1, 4, 9, 49])
  });
});
