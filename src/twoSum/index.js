/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

  if(!nums.length) return  [];

  for(let i = 0; i < nums.length; i++){
    for(let j = i + 1 ; j < nums.length; j++){
      const twoSum = nums[i] + nums[j];
      if (twoSum === target){
        return [ i , j]
      }
    }

  }

};


