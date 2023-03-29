


function isPangram(string){
  const aToZ = string.match(/([a-z])(?!.*\1)/gi);
  if(aToZ.length === 26) {
    return true;
  } else {
    return false;
  }
  }

console.log(isPangram("The quick brown fox jumps over the lazy dog"));
