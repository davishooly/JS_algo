const flatten = (final ) => {
    const result = [];
    final.forEach(el => {
        if (typeof el === 'object'){
            result.push(...el)
        }
        else{
            result.push(el)
        }
    })
    const hasObject = result.some(val => typeof val === "object")
    if(!hasObject) {
        return result;
    }
    else {
        return flatten(result);
    }
}