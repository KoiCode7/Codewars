function dotCalculator(equation) {
  const [left, operator, right] = equation.split(" ");

  const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "//": (a, b) => a / b,
  };

  return ".".repeat(operators[operator](left.length, right.length));
}

console.log(dotCalculator(".. - .."));
