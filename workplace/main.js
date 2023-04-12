function maxProduct(numbers, size) {
  const sortedArr = numbers.sort((a, b) => b - a);
  let result = 1;
  for (let i = 0; i < size; i++) {
    result *= sortedArr[i];
  }
  return result;
}

console.log(maxProduct([13, 12, -27, -302, 25, 37, 133, 155, -14], 5));
