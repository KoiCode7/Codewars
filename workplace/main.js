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


console.log(count('aba'));