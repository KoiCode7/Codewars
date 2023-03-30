// Answer
function getCount(str) {
const count = str.match(/[aiueo]/gi);
console.log(count);
return count? count.length: 0;
}

getCount("bbb");
