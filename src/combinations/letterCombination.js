/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

    const digitCharacters = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pgrs',
        8: 'tuv',
        9: 'wxyz'
    }

    const queue = [''];
    const combinationLength = digits.length;
    const combinations = []


    while(queue.length){
        const letters = queue.pop();
        if(letters.length === combinationLength) {
            combinations.push(letters)
        } else {
            for(let letter of digitCharacters[digits[letters.length]]){
                queue.push(letters + letter)
            }

        }
    }

    return combinations;

};