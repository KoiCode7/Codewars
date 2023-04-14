function maxGap(numbers) {
  const sortedArr = numbers.sort((a, b) => a - b);
  let maxNum = 0;

  sortedArr.forEach((el, idx, arr) => {
    const difference = Math.abs(el - arr[idx + 1]);
    if (difference > maxNum) {
      maxNum = difference;
    }
  });

  return maxNum;
}

console.log(maxGap([-3, -27, -4, -2]));
