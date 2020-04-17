const Calculator = function() {
  this.evaluate = string => {
    string = string.split(" ");
    let operators = [];
    string.filter(char => {
      if (isNaN(char)) {
        let index = string.indexOf(char);
        operators.push({ operator: char, index: index });
      }
    });
    console.log(operators);
  };
};
let calculator = new Calculator();
calculator.evaluate("2 / 2 + 3 * 4 - 6");
