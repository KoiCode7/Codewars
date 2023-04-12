function maxProduct(numbers, size) {
  return numbers
    .sort((a, b) => b - a)
    .slice(0, size)
    .reduce((acc, cu) => acc * cu, 1);
}

console.log(maxProduct([13, 12, -27, -302, 25, 37, 133, 155, -14], 5));
