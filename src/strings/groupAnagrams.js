/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function(strs) {
    if(!strs.length) return [];
    const anagrams = {};

    strs.forEach(str => {
        const sortedString = str.split('').sort().join('');
        anagrams[sortedString] = anagrams[sortedString] ? [...anagrams[sortedString], str] : [str]
    });

    return Object.values(anagrams)
};
