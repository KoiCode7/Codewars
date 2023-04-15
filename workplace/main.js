function productArray(numbers) {
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    const newArray = [...numbers];
    newArray.splice(i, 1);
    result = [...result, newArray.reduce((acc, c) => acc * c, 1)];
  }

  return result;
}

console.log(productArray([3, 27, 4, 2]));
