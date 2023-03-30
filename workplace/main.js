// Answer
function getCount(str) {
  let count = 0;

  for (i = 0; i < str.length; i++) {
    if (
      (str[i] === "a") |
      (str[i] === "i") |
      (str[i] === "u") |
      (str[i] === "e") |
      (str[i] === "o")
    ) {
      count += 1;
    }
  }

  return count;
}

getCount("abiuracadeoabra");
