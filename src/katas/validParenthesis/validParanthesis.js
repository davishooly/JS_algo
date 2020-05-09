// Challange: VALID PARENTHESIS
// Given a string contaning just characters
// '(', ')', '{', '}', '[' and ']'
// determine if the input string is VALID

// An input string is valid if:
// Open brackets must be closed in the correct order.
// Open brackets must be closed by the same type of brackets.
// Note that an empty string is considered as VALID.


export const validParenthesis = (string) => {
    if(!string.length) return true;
    const matcher = { '(' :')', "[": "]", "{": "}"}
    const openBrackets = Object.keys(matcher)
    const pairs  = [];
    for(let char of string){
        if(openBrackets.includes(char)){
            pairs.push(char)
        }
        else {
            if (!pairs.length)  return false;
            let lastOpen = pairs.pop()
            if(matcher[lastOpen] !== char){
                return false
            }
        }
    }
    return pairs.length === 0;
};
