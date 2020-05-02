import { findSubArray } from './subArrayOfDesiredSum'

describe('find the subarrays that add up to desired sum', function () {

    it('should return sub arrays that match the given value', function () {
        expect(findSubArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 9)).toStrictEqual([2,3,4])
        expect(findSubArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 7)).toStrictEqual([3,4])
    });

});