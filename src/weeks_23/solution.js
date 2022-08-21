function solution(chess) {
  let answer = [];

  // k, q, l, b, n, p
  const chessFull = [1, 1, 2, 2, 2, 8];

  chessFull.forEach((c, i) => answer.push(c - chess[i]));

  return answer;
}

const input1 = [0, 1, 2, 2, 2, 7];
const input2 = [2, 1, 2, 1, 2, 1];

const result = solution(input2);
console.log(result);
