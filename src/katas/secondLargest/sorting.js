
const sorted = (nums) => {
  for( let i = 0 ; i < nums.length; i++){
    for( let j = i + 1; j < nums.length; j++){
      if (nums[i] < nums[j]){
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] =  temp
      }
    }
  }
  return nums;
};


function getSecondLargest(nums) {
  let secondLargestNum;
  let sortedNums;
  sortedNums = sorted(nums);

  const largestNum = sortedNums[0];

  for( let i = 1; i < sortedNums.length; i++) {
    if(sortedNums[i] === largestNum){
      continue;
    }
    secondLargestNum = sortedNums[i];
    break;
  }
   return secondLargestNum
}


getSecondLargest([ 10, 9, 9, 8, 8, 11, 8, 0, 9, 1]);
