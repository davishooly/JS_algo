//Given an array nums of n integers where n > 1,  return an array output such
// that output[i] is equal to the product of all the elements of nums except nums[i].

const productExceptSelf = (nums) => {
    const result = [];
    nums.forEach((num, i) => {
        const product = [...nums]
        product.splice(i, 1)
        result.push(product.reduce((acc, curr) => acc * curr ))
    })
    return result;
}

productExceptSelf([1,2,3,4]);