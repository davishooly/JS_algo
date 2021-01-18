/**
 * given a string remove all duplicating characters
 *
 */
/**
 * @return {string}
 * @param string
 */

const removeDuplicates = (string) => {
    const updatedString = new Set();
    for( let i = 0; i < string.length ; i++) {
        updatedString.add(string[i])
    }
    return [...updatedString].join('');
};
