function moveZeros(arr) {
  const notZero = arr.filter((el) => el !== 0);
  const zero = arr.filter((el) => el === 0);

  return notZero.concat(zero);
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
