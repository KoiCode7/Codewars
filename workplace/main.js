function isItANum(str) {
  const fixedStr = str.toLowerCase().replace(/[^0-9]/g, "");
  if (fixedStr.length === 11 && fixedStr[0] === "0") {
    return fixedStr;
  } else {
    return "Not a phone number";
  }
}

console.log(isItANum("S:)0207ERGQREG88349F82!efRF)"));
