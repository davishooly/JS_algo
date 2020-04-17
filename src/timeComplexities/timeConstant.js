var now = require("performance-now");
const findEven = n => {
  return n % 2 ? "odd" : "even";
};

var t0 = now();

console.log(findEven(10054454754764575));

var t1 = now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
