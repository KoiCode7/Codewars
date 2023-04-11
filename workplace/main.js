// function selReverse(array, length) {
//   let reverseArray = [];
//   const num = Math.ceil(array.length / length);
//   for (let i = 0; i < num; i++) {
//     reverseArray.push(...array.splice(0, length).reverse());
//   }

//   return reverseArray;
// }

function selReverse(array, length) {
  if (length === 0) {
    return;
  }
  let reverseArray = [];
  const num = Math.ceil(array.length / length);

  for (let i = 0; i < num; i++) {
    const start = i * length;
    const end = start + length;
    const subArray = array.slice(start, end).reverse();
    reverseArray = reverseArray.concat(subArray);
  }

  return reverseArray;
}
console.log(selReverse([2, 4, 6, 8, 10, 12, 14, 16], 3));

function selReverse(array, length) {
  let reverseArray = [];
  const num = Math.ceil(array.length / length);
  for (let i = 0; i < num; i++) {
    const start = i * length;
    const end = start + length;
    const subArray = array.slice(start, end).reverse();
    reverseArray = reverseArray.concat(subArray);
  }

  return reverseArray;
}

// console.log(selReverse([2,4,6,8,10,12,14,16], 3));

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));
// // Expected output: Array ["camel", "duck", "elephant"]

// console.log(animals);
// // Expected output: Array ["camel", "duck"]

function selReverse(array, length) {
  if(length === 0) {
    return array;
  }
  let reverseArray = [];
  const num = Math.ceil(array.length / length);
  for (let i = 0; i < num; i++) {
    reverseArray = [...reverseArray, ...array.splice(0, length).reverse()]
  }

  return reverseArray;
}
