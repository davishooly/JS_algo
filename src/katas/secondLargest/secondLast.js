const findSecondLast = () => {
  let max = list[0];
  let min = 0;
  list.forEach((num, i) => {
    if(max < num ){
       min = max
       max = num
    }
    else if ( num > min ){
       min = num
    }
  })
}

findSecondLast()
