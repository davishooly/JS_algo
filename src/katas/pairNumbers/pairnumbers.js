const pairs = pairs => {
  let newPairs = [];
  let a = pairs.reduce((a, b) => {
    if (typeof a[b] == "undefined") {
      a[b] = 1;
    } else {
      a[b] += 1;
    }
    return a;
  }, {});
  for (const [key, value] of Object.entries(a)) {
    if (value > 1) {
      let pairs = Math.floor(value / 2);
      newPairs.push(pairs);
    }
  }
  let b = newPairs.reduce((a, b) => {
    return a + b;
  });
  console.log(b);
};
pairs([10, 20, 20, 10, 10, 30, 50, 10, 20]);
