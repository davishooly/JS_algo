
function calculate(a, b) {
	let result = [];
	for (var i = a; i <= b; i++) {
		let sum = 0;
		for (let j = 1; j <= i; j++) {
			if (i % j === 0) {
				sum += j * j;
			}
		} if (Math.sqrt(sum) % 1 === 0) {
			result.push([i, sum]);
		}
	} return result;
}
calculate(1, 250);