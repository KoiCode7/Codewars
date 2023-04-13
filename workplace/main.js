function arrayLeaders(numbers) {
  const newNums = [...numbers];
  let newArray = [];
  for (let i = 0; i < numbers.length; i++) {
    const firstNum = newNums.shift();
    const sum = newNums.reduce((acc, c) => acc + c, 0);

    if (firstNum > sum) {
      newArray = [...newArray, firstNum];
    }
  }
  return newArray;
}

console.log(arrayLeaders([0, -1, -29, 3, 2]));
