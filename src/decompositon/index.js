export function decompose(n) {
  let count = 1;
  let value = n * n;
  const actual = [];

  if(n <= 4 ){
    return null
  }

  const getNum = (num) => {
    const pow = num * num;
    const remainder = value - pow;
    let nextValue = 0;
    for(let i = 1; i < value; i++){
      if( (i * i) <= remainder ){
        nextValue = i
      }
    }
    return {nextValue, remainder};
  };
  while(value > 1){
    if(count === 1){
      actual.push(n - 1);
      count++
    }
    const {nextValue, remainder} = getNum(actual[actual.length - 1]);
    actual.push(nextValue);
    value = remainder
  }
  return actual.reverse()
}
