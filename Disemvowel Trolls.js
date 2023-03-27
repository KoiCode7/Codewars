function disemvowel(str) {
  let newStr = str.replaceAll('a', '');
  newStr = newStr.replaceAll('i', '');
  newStr = newStr.replaceAll('u', '');
  newStr = newStr.replaceAll('e', '');
  newStr = newStr.replaceAll('o', '');
    newStr = newStr.replaceAll('A', '');
    newStr = newStr.replaceAll('I', '');
    newStr = newStr.replaceAll('U', '');
    newStr = newStr.replaceAll('E', '');
    newStr = newStr.replaceAll('O', '');
  return newStr;
}