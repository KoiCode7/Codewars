const arrayLeaders = (numbers) =>
  numbers.filter((el, index) => el > numbers.slice(index + 1).reduce((acc, c) => acc + c, 0));

console.log(arrayLeaders([0, -1, -29, 3, 2]));
