function duplicateEncode(word) {
  const array = word.toLowerCase().split("");
  const object = {};

  array.forEach((el) => {
    if (object[el]) {
      object[el]++;
    } else {
      object[el] = 1;
    }
  });

  return array.map((el) => (object[el] > 1 ? ")" : "(")).join("");
}

console.log(duplicateEncode("Success"));
