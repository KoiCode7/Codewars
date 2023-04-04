function squareDigits(num) {
return +num.toString().split('').map(el => el ** 2).join('');
}

console.log(squareDigits(765));

