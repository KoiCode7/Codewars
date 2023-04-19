function rowWeights(array) {
  console.log(array);
  const t1 = array.filter((el, idx) => idx % 2 === 0).reduce((acc, c) => acc + c, 0);
  const t2 = array.filter((el, idx) => idx % 2 !== 0).reduce((acc, c) => acc + c, 0);
  return [t1, t2];
}

console.log(rowWeights([50, 60, 70, 80]));
