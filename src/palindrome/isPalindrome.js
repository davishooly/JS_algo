
const isPalindrome = (string) => {

    let start = 0;
    let end = string.length - 1;
    let isPalindrome = false;
    while (start <= end){

        if(string[start]=== ' ' && string[end]=== ' ') {
            start++
            end--
            continue;
        }
        if(string[start]=== ' ') {
            start++
            continue;
        }
        if (string[end] === ' ') {
            end--
            continue;
        }

        isPalindrome = string[start] === string[end]
        if(!isPalindrome) {
            break;
        }
        start++;
        end--
    }

    return isPalindrome;
}

isPalindrome(' dad ')