function maxTriSum(numbers) {
  const arr = numbers.sort((a, b) => b - a).filter((el, idx, arr) => el !== arr[idx - 1]);

  return arr[0] + arr[1] + arr[2];
}

console.log(maxTriSum([-7, 12, -7, 29, -5, 0, -7, 0, 0, 29]));
