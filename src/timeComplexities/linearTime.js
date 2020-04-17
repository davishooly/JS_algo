const now = require("performance-now");
const findMax = n => {
  let max;
  let counter = 0;
  for ( let i = 0; i < n.length; i++) {
    counter++;
    if (max === undefined || max < n[i]) {
      max = n[i];
    }
  }
  console.log(`n: ${n.length}, counter: ${counter}`);
  return max;
};


let t0 = now();
findMax([200, 900, 700, 800, 1000, 12000, 100000, 90000]);
let t1 = now();

console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
