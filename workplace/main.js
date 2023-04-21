function adjacentElementsProduct(array) {
  return Math.max(...array.map((el, idx, arr) => el * arr[idx + 1]).filter(el => !isNaN(el)));
}

console.log(adjacentElementsProduct([1, 2, 3]));
