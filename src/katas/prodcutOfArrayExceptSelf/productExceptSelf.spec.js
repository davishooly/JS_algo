import { productExceptSelf } from './productExceptSelf'

describe('test productExceptSelf', function () {

    it("productExceptSelf", () => {
        expect(productExceptSelf([1,2,3,4])).toStrictEqual([24, 12, 8, 6])
    })
});