/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    let longestDistance = 0;
    let start = 0;
    const binary = n.toString(2);

    if(!binary.length || binary.length === 1) return 0;

    for(let i = 0; i < binary.length; i++){
        if(binary[i] === '1') {
            let prevStart = start;
            start = i;
            let end = start;
            const adjacent = end - prevStart;
            if(adjacent > longestDistance){
                longestDistance = adjacent
            }
        }
    }

    return longestDistance;
};