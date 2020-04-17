// selection sort
export const selectSort = (numbers)=> {
  for(let i=0; i < numbers.length; i++){
    for(let j=i+1; j<numbers.length; j++){
      if(numbers[i] > numbers[j]){
        let temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp
      }
    }
  }
  return numbers;
};
selectSort([10, 90, 700, 1000, 600]);
