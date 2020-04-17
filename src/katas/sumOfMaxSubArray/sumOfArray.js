//Kadane's Algorithm Example
const sumOfArrays = (numberList) => {
  if(numberList.length === 1 ){
    return numberList[0]
  }

  let max_so_far = 0
  let max_ending_here = 0;
   for(i = 0; i < numberList.length; i++){
     max_ending_here = max_ending_here + numberList[i]
     if(max_so_far < max_ending_here){
       max_so_far = max_ending_here;
     }
      if(max_ending_here < 0){
        max_ending_here = 0;
      }
   }
   
}


sumOfArrays([-2,1,-3,4,-1,2,1,-5,4]);
