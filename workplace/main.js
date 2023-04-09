function duplicateEncode(word) {
  const array = word.toLowerCase().split("");

  return array
    .map(function (value, index, array) {
      return array.indexOf(value) === array.lastIndexOf(value) ? "(" : ")";
    })
    .join("");
}

console.log(duplicateEncode("Success"));
