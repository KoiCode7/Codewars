// function largestPairSum(numbers) {
//   const sortedArray = numbers.sort((a, b) => b - a);
//   return sortedArray[0] + sortedArray[1];
// }

console.log(largestPairSum([10, 14, 2, 23, 19]));


function largestPairSum(numbers) {
  const [a, b, c] = numbers.sort((a, b) => b - a)
  console.log(a);
  console.log(b);
  console.log(c);
  return a + b
}