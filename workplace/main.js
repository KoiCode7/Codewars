function count(string) {
  const object = {};
  string.split("").forEach((el) => {
    object[el] ? object[el]++ : (object[el] = 1);
  });
  return object;
}

console.log(count("aba"));
