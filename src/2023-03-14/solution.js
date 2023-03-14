// n = 3 인 경우 동일한 집합이 2개 존재
// [1, 2, 3]
// [1, 3, 2]

// [2, 1, 3]
// [2, 3, 1]

// [3, 1, 2]
// [3, 2, 1]

// n = N 일 때 동일 집합이 (N-1)! 존재
// k / (N-1)!  ---> 몫이 첫 번째 자리에 올 요소 인덱스
// k가 5이면, 5/6 -> 1

function solution(n, k) {
  let answer = Array.from({ length: n }, (_, i) => i + 1);

  console.log('answer: ', answer);

  const stack = [];
  k = k - 1;
  console.log('init k: ', k);

  while (answer.length) {
    const idx = Math.floor(k / factorial(n - 1));
    console.log('idx: ', idx);

    stack.push(answer.splice(idx, 1)[0]);
    console.log('stack: ', stack);

    k %= factorial(n - 1);
    console.log('k: ', k);

    n--;
  }

  return stack;
}

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

solution(3, 5);
