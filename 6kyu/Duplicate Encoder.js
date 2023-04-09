// DESCRIPTION:
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 


// Answer 
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