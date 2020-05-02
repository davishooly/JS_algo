// Given an array of integers, find maximum/minimum sum subarray of a given specified size
export const findStaticSubArray = (arr, size) => {

    let max = 0;
    let currentSubArray = [];

    for(i = 0; i < arr.length; i++ ){
        const sliced = [...arr].slice(i, i + size);
        const sum = sliced.reduce((acc, curr) => acc + curr)
        if(sum > max){
            currentSubArray = sliced;
            max = sum;
        }
    }

    return currentSubArray
};
