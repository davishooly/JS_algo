const differentiate = (equation, point) => {
  //Good luck
  equation = equation.split("");
  const variables = [];
  equation.filter(val => {
    if (isNaN(val)) {
      let obj = {
        val: val,
        index: equation.indexOf(val)
      };
      variables.push(obj);
    }
  });
};
differentiate("12x+2", 3);
