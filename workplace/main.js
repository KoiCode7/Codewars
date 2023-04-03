function sumEvenNumbers(input) {
  const evenNum = input.filter((el) => el % 2 === 0);
  return Math.floor(evenNum.reduce((acc, c) => acc + c, 0));
}

console.log(sumEvenNumbers([4, 3, 1, 2, 5, 10, 6, 7, 9, 8]));