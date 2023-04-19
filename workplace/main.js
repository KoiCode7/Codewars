function rowWeights(array) {
  let result = [0, 0];

  for (let i = 0; i < array.length; i++) {
    result[i % 2] += array[i];
  }
  return result;
}

console.log(rowWeights([50, 60, 70, 80]));
