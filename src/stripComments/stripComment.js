
// Complete the solution so that it strips all text that follows any of a set of comment markers passed in.
// Any whitespace at the end of the line should also be stripped out.

function solution(input, markers) {
    let stripped = ''
    let count = 0;

    for(i=0; i < input.length; i++) {
        if(markers.includes(input[i])){
            stripped+= input[i - 1] === ' ' ? input.slice(count, i -1) : input.slice(count, i)
            count = input.indexOf('\n')
        }
    }
    return stripped
};