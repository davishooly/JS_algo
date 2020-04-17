import  { selectSort } from '../selectionSort/selectionSorting'
import  { recursiveSort } from "./recursionSort"
describe('sorting', () => {
  it('describes selection', () => {
    //compares deep equality
    expect(selectSort([10, 90, 700, 1000, 600])).toStrictEqual([ 10, 90, 600, 700, 1000 ])
  });

  it("describes recursionSort", () => {
    expect(recursiveSort([10, 90, 700, 1000, 600], 0, 1)).toStrictEqual([ 10, 90, 600, 700, 1000 ])
  });
});
