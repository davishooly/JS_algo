const smallestSubArrayGivenSum = (arr, sum) => {

    let minWindowSize = 0;
    let currentWindowSum = 0;
    let windowStart = 0;

    for(let i = 0; i < arr.length; i++) {
        currentWindowSum += arr[i];
        while (currentWindowSum >= sum) {
            minWindowSize = minWindowSize < (i - windowStart + 1) ? minWindowSize : (i - windowStart + 1);
            currentWindowSum -= arr[windowStart];
            windowStart++
        }

    }

    return minWindowSize;

};


smallestSubArrayGivenSum([4,2,2,7,8,1,2,8,10], 8);