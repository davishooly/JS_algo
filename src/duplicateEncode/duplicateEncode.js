function duplicateEncode(kim){
  kim = kim.toLowerCase();
    // ...
  return kim.toLowerCase().split('').map((l,i) => {
  if(kim.indexOf(l) !== i){
    return ")"
  }
  else {
    return kim.slice(i+1, kim.length).includes(l) ? ")" : "("
  }
}).join("")
}
