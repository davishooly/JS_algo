import {selectSort} from "./selectionSorting";

describe('sorting', () => {
  it('describes selection', () => {
    //compares deep equality
    expect(selectSort([10, 90, 700, 1000, 600])).toStrictEqual([10, 90, 600, 700, 1000])
  });

});
