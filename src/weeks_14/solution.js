function solution(begin, end) {
  var answer = [];

  for (let i = begin; i <= end; ++i) {
    if (i === 1) {
      answer.push(0);
      continue;
    }

    if (Number.isInteger(Math.sqrt(i))) {
      answer.push(Math.sqrt(i));
      continue;
    }

    if (i % 2 === 0) {
      answer.push(i / 2);
      continue;
    }

    answer.push(i % 2);
  }

  return answer;
}

// - 정수 제곱근 판별 (1 제외)
//   - 정수 제곱근이면 제곱근이 곧 블록이 된다.
// - 아니면 나누기 2
//   - 나누어지면 몫이 곧 블록
// - 안 나누어지면 나머지가 곧 블록

const r = solution(1, 20);
console.log(r);
