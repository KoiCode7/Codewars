function minSum(arr) {
  let sum = 0;
  arr.sort((a, b) => a - b);
  while (arr.length) {
    sum += arr.shift() * arr.pop();
  }
  return sum;
}

console.log(minSum([12, 6, 10, 26, 3, 24]));
