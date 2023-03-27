function disemvowel(str) {
  const newStr = str.replace(/[aiueo]/gi, '');
  return newStr;
}