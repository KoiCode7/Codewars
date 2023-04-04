function squareDigits(num) {
  const str = num.toString();
  let result = "";

  for (let i = 0; i < str.length; i++) {
    result += str[i] ** 2;
  }
  return +result;
}

console.log(squareDigits(765));

