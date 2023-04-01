// Answer
// "use strict";

// function flattenAndSort(array) {
//   let oneDimensionalArray = [];
//   array.forEach(el => oneDimensionalArray.push(...el) )
//   return oneDimensionalArray.sort((a, b) => a - b);
// }

// const a = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]];

// flattenAndSort(a);
// console.log(flattenAndSort(a));
"use strict";

function flattenAndSort(array) {
  return [].concat(...array);
}

const a = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]];

flattenAndSort(a);
console.log(flattenAndSort(a));

