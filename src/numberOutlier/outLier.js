function findOutlier(integers){
  //your code here
  let evenCounter = 0;
  let oddCounter = 0
  const odd = []
  const even = []

  for(i = 0; i < integers.length; i++){

     let curr  = integers[i];

      if(integers[i] % 2 === 0){
        odd.push(curr)
        evenCounter++
      }
      if(integers[i] % 2 !== 0){
        even.push(curr)
        oddCounter++
      }  
      if(oddCounter === 1 && evenCounter > 1){
        break;
      }
      if(evenCounter === 1 && oddCounter > 1){
        break;
      }
  }

  return odd.length > 1 ? even : odd
}

findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])
