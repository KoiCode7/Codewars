// Answer
function digitize(n) {
  let array = String(n).split("");
  array = array.map(el => +el);
  return array.reverse();
}

console.log(digitize(5326));
