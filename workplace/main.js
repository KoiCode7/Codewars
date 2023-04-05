function solution(start, finish) {
  let count = 0;
  let shelfNum = start;
  while (finish !== shelfNum) {
    if (finish >= shelfNum + 3) {
      count++;
      shelfNum += 3;
    } else {
      count++;
      shelfNum += 1;
    }
  }
  return count;
}

console.log(solution(1, 5));
