//Given an array nums of n integers where n > 1,  return an array output such
// that output[i] is equal to the product of all the elements of nums except nums[i].

const productExceptSelf = (nums) => {
    const result = [];
    nums.forEach((num, i) => {
        nums.splice(i, 1)
        result.push(nums.reduce((acc, curr) => acc * curr ))
        nums.splice(i, 0, num)

    })
    return result;
}

productExceptSelf([1,2,3,4]);