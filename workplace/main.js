


function isPangram(string){
let sentence = string.toLowerCase();
sentence = sentence.match(/([a-z])(?!.*\1)/g);
if(sentence.length === 26) {
  return true;
} else {
  return false;
}
}

console.log(isPangram("The quck brown fox jumps over the lazy dog"));
