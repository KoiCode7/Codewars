function nthSmallest(arr, pos) {
  return +arr
    .sort((a, b) => a - b)
    .splice(pos - 1, 1)
    .join("");
}

console.log(nthSmallest([15, 20, 7, 10, 4, 3], 3));
