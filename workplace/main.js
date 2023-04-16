const nthSmallest = (arr, pos) => arr.sort((a, b) => a - b)[pos - 1];

console.log(nthSmallest([15, 20, 7, 10, 4, 3], 3));
