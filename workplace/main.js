function minSum(arr) {
  let sum = 0;
  const newArr = arr.sort((a, b) => a - b);
  for (let i = 0; i < newArr.length / 2; i++) {
    sum += newArr[i] * newArr[newArr.length - (1 + i)];
  }
  return sum;
}

console.log(minSum([12, 6, 10, 26, 3, 24]));
