// DESCRIPTION:
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.


// Answer 
function count(string) {
  const object = {};
  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (object[char]) {
      object[char]++;
    } else {
      object[char] = 1;
    }
  }
  return object;
}