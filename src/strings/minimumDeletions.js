/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {

    const occurrences = {};
    const uniqueFrequencies = new Set();

    for(let i = 0; i < s.length; i++){
        occurrences[s[i]] =  occurrences[s[i]] ? occurrences[s[i]] + 1 : 1
    }

    const occurrencesLength = Object.values(occurrences).sort((a,b) => b - a);

    let sizeDifference = occurrencesLength.length;

    let deletions = 0;

    while(sizeDifference){
        for(let i = 0; i < occurrencesLength.length; i++){
            if(uniqueFrequencies.has(occurrencesLength[i])){
                occurrencesLength[i] = occurrencesLength[i] - 1;
                deletions++;
            }
            uniqueFrequencies.add(occurrencesLength[i]);
        }
        sizeDifference = occurrencesLength.length - uniqueFrequencies.size;
    }

    return deletions;
};