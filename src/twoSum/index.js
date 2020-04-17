/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export const twoSum = function(nums, target) {

  for( let i = 0 ; i < nums.length ; i++){
    for(let j = 1 ; j < nums.length; j++) {
      if ( nums[i] + nums[j] === target) {
        if( nums[i]  === nums[j]){
          const first = nums.indexOf(nums[i]);
          const second = nums.indexOf(nums[i], first + 1);
          if(second === -1) {
            continue
          } else {
            return [i , second]
          }
        }
        return [i , j]
      }
    }
  }

};

