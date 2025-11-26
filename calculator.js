function calc(...args) {
  if (args.length < 3) throw new Error("Insufficient arguments");

  const numbers = [];
  const operators = [];

  for (let i = 0; i < args.length; i++) {
    if (i % 2 === 0) {
      if (typeof args[i] !== "number") throw new Error("Invalid input type");
      numbers.push(args[i]);
    } else {
      if (!["+", "-", "*", "/"].includes(args[i]))
        throw new Error("Invalid operator");
      operators.push(args[i]);
    }
  }

  //  * , /
  for (let i = 0; i < operators.length; ) {
    if (operators[i] === "*" || operators[i] === "/") {
      const a = numbers[i] > 1000 ? null : numbers[i];
      const b = numbers[i + 1] > 1000 ? null : numbers[i + 1];

      if (a === null && b === null) {
        numbers.splice(i + 1, 1);
        operators.splice(i, 1);
        continue;
      }

      if (a === null) {
        numbers.splice(i, 2, b);
        operators.splice(i, 1);
        continue;
      }

      if (b === null) {
        numbers.splice(i, 2, a);
        operators.splice(i, 1);
        continue;
      }

      if (operators[i] === "/" && b === 0) throw new Error("Division by zero");
      numbers.splice(i, 2, operators[i] === "*" ? a * b : a / b);
      operators.splice(i, 1);
    } else {
      i++;
    }
  }

  //  + , -
  let result = numbers[0] > 1000 ? 0 : numbers[0];
  for (let i = 0; i < operators.length; i++) {
    const num = numbers[i + 1] > 1000 ? 0 : numbers[i + 1];
    result = operators[i] === "+" ? result + num : result - num;
  }

  return result;
}

module.exports = calc;
