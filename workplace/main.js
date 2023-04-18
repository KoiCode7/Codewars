function maxTriSum(numbers) {
  return numbers
    .sort((a, b) => b - a)
    .filter((el, idx, arr) => el !== arr[idx - 1])
    .filter((el, idx) => (idx < 3 ? el : null))
    .reduce((acc, c) => acc + c, 0);
}

console.log(maxTriSum([-7, 12, -7, 29, -5, 0, -7, 0, 0, 29]));
