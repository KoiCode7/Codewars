function duplicateEncode(word) {
  const a = word.toLowerCase().split("");
  const ob = {};

  a.forEach((el) => {
    if (ob[el]) {
      ob[el]++;
    } else {
      ob[el] = 1;
    }
  });

  return a.map((el) => (ob[el] > 1 ? ")" : "(")).join("");
}

console.log(duplicateEncode("Success"));
