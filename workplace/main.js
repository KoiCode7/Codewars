/**
 * Given the number of consecutive integers and the total of the integers,
 * return the consecutive integer at the requested position.
 *
 * @param {int} x number of consecutive integers
 * @param {int} y sum of consecutive integers
 * @param {int} n position of requested integer
 * @return {int} consecutive integer at requested position
 */
function position(x, y, n) {
  let num = 0;
  for(i= 0; i < x; i++) {
    num += i;
  }

  const a = (y - num)/x;

  return a + n;

  // TODO: return consecutive integer at requested position
}


console.log(position(3, -9, 1));