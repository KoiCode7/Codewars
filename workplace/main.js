function minimumSteps(numbers, value) {
  numbers.sort((a, b) => a - b);
  const len = numbers.length;
  let steps = 0;
  let sum = +numbers.splice(0, 1).join("");

  if (sum >= value) {
    return steps;
  }

  for (let i = 0; i < len; i++) {
    sum += +numbers.splice(0, 1).join("");
    steps++;
    if (sum >= value) {
      return steps;
    }
  }
  return steps;
}

console.log(minimumSteps([4, 6, 3], 2));
