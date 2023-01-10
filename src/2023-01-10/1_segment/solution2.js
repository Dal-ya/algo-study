/**
 *
 * @param {number[][]} lines  // length 3
 * @returns number
 */
function solution(lines) {
  var answer = 0;

  const lineOne = enumerateLine(lines[0]);
  const lineTwo = enumerateLine(lines[1]);
  const lineThree = enumerateLine(lines[2]);

  // 겹치는 지점 확인
  let overlapOne = lineOne.filter((v) => lineTwo.includes(v));
  let overlapTwo = lineOne.filter((v) => lineThree.includes(v));
  let overlapThree = lineTwo.filter((v) => lineThree.includes(v));

  // console.log(overlapOne);
  // console.log(overlapTwo);
  // console.log(overlapThree);

  // 직선이 되지 못하는 경우 제외(점 하나만 겹치는 경우)
  if (overlapOne.length === 1) overlapOne = [];
  if (overlapTwo.length === 1) overlapTwo = [];
  if (overlapThree.length === 1) overlapThree = [];

  const overlap = new Set(
    [...overlapOne, ...overlapTwo, ...overlapThree].sort((a, b) => a - b)
  );

  // console.log('overlap: ', overlap);

  answer = [...overlap].length - 1;

  if (answer === -1) return 0;

  return answer;
}

/**
 *
 * @param {number[]} line
 * @returns number[]
 * @example input [0, 5] --> return [0, 1, 2, 3, 4, 5]
 */
function enumerateLine(line) {
  let result = [];

  for (let i = line[0]; i <= line[1]; i++) {
    result.push(i);
  }

  return result;
}

const r = solution([
  [0, 5],
  [3, 9],
  [1, 10],
]);

console.log('result: ', r);

// const flatLines = lines.flat();
// const min = Math.min(...flatLines);
// const max = Math.max(...flatLines);
