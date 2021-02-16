/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    const numbers = x.toString();
    let reversedNumber = '';
    for(let i = numbers.length - 1; i >= 0; i--){
        reversedNumber += numbers[i];
        if(reversedNumber < Math.pow(-2, 31) || reversedNumber > Math.pow(2, 31)-1) return 0;

    }
    return result = x < 0 ? parseInt(reversedNumber) * -1 : parseInt(reversedNumber);


};