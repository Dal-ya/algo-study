// https://www.acmicpc.net/problem/11660
// Prefix Sum 2D
// 이미지 처리에 많이 사용된다.

// R: Row, C: Column
// S[R + 1][C + 1] =  S[R + 1][C] + S[R][C + 1] - S[R][C] + A[R][C]

// https://gamedevlog.tistory.com/68
// Prefix sum은 누적 합을 미리 구하는 전처리 과정을 통해 구간 합(range sum)을 빠르게 구할 때 사용된다.
// prefix sum : 0~b까지의 누적합 (반드시 첫번 째 원소를 포함하는 구간)
// range sum : a~b까지의 구간 합

const A = [
  [3, 1, 5, 7, 2],
  [9, 4, 8, 9, 7],
  [3, 9, 2, 3, 6],
  [2, 7, 5, 6, 1],
  [4, 6, 8, 5, 3],
  [3, 5, 9, 2, 7],
];

function makePrefixSum(A) {
  let S = JSON.parse(JSON.stringify(A)); // 배열 값 복사

  S.unshift(new Array(A[0].length + 1).fill(0));
  for (let i = 1; i < S.length; i++) {
    S[i].unshift(0);
  }

  console.log(S);

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[i].length; j++) {
      S[i + 1][j + 1] = S[i + 1][j] + S[i][j + 1] - S[i][j] + A[i][j];
    }
  }

  console.log(S);

  S.shift();

  for (let i = 0; i < S.length; i++) {
    S[i].shift();
  }
  return S;
}

const r = makePrefixSum(A);
console.log(r);
