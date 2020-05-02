export const findSubArray = (arr, matcher) => {
    const subArray = [arr[0]];

    const getSum = () => {
        return subArray.reduce((acc, curr) => acc + curr);
    }
    for(let i = 1; i < arr.length; i++ ){
        if(getSum() === matcher){
            return subArray
        }
        if(getSum() < matcher){
            subArray.push(arr[i])
        }
        if(getSum() > matcher){
            subArray.shift()
        }
    }
    return subArray
}
