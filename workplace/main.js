function solution(start, finish) {
  const numToClimb = finish - start;
  const threeStepsJump = Math.floor(numToClimb / 3);
  const oneStepJump = numToClimb % 3;
  return threeStepsJump + oneStepJump;
}

console.log(solution(1, 5));
