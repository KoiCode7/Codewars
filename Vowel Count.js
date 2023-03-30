// DESCRIPTION:
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.




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