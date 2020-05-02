import { findStaticSubArray } from './index'

describe('', function () {

    it('should return a subAarray of max of specified size', function () {
        expect(findStaticSubArray([1, 2, 3, 4, 5, 8, 9, 6, 7], 2)).toStrictEqual([8,9])
        expect(findStaticSubArray([1, 2, 3, 4, 5, 8, 9, 6, 7], 3)).toStrictEqual([8, 9, 6])
    });

});