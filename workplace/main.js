const productArray = (numbers) =>
  numbers.map((el, idx, arr) => arr.reduce((acc, cu) => acc * cu, 1) / el);

console.log(productArray([3, 27, 4, 2]));
