function minimumSteps(numbers, value) {
  numbers.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    if (sum >= value) {
      return i;
    }
  }
}

console.log(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464));
