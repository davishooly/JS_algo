function properFractions(n) {
  if (n === 1) return 0;
  let a = n;
  let i = 2;
  let primeFactors = [];
  while (a > 1) {
    a = a / i;
    if (a % i === 0) {
      if (primeFactors.indexOf(i) === -1) primeFactors.push(i);
    } else i++;
  }
  return Math.round(
    primeFactors
      .map(a => 1 - 1 / a)
      .reduce((a, v) => {
        return a * v;
      }, 1) * n
  );
}
properFractions(25);
