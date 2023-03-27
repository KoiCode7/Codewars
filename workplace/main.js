


function removeSmallest(numbers) {
  const arrayCopiedNumbers = [...numbers];
  const smallestVal = Math.min(...arrayCopiedNumbers);
  const index = arrayCopiedNumbers.indexOf(smallestVal);
  arrayCopiedNumbers.splice(index, 1);
  return arrayCopiedNumbers;
}


console.log(removeSmallest([2,2,1,2,1]));


