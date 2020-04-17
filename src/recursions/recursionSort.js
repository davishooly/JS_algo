const minValue = (arr, startIndex, endIndex ) => {
  // base case
  if(startIndex === endIndex){
    return startIndex
  }
  const k = minValue(arr, startIndex + 1, endIndex)
  return arr[startIndex] < arr[k] ? startIndex : k
};

export const recursiveSort = (arr, startIndex, endIndex) => {
  // solution for base case
  if(startIndex >= arr.length - 1){
    return arr
  }
  let minimum = minValue(arr, startIndex, arr.length -1);
  if(minimum){
    const temp = arr[startIndex];
    arr[startIndex] = arr[minimum];
    arr[minimum] = temp
  }
  return recursiveSort(arr, startIndex + 1,arr.length -1)
};

const arr = [10, 90, 700, 1000, 600];
recursiveSort(arr, 0 , 1);
