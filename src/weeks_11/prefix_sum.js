// https://www.acmicpc.net/problem/11660
// Prefix Sum 2D
// 이미지 처리에 많이 사용된다.

// R: Row, C: Column
// S[R + 1][C + 1] =  S[R + 1][C] + S[R][C + 1] - S[R][C] + A[R][C]

const A = [
  [3, 1, 5, 7, 2],
  [9, 4, 8, 9, 7],
  [3, 9, 2, 3, 6],
  [2, 7, 5, 6, 1],
  [4, 6, 8, 5, 3],
  [3, 5, 9, 2, 7],
];

function makePrefixSum(A) {
  let S = JSON.parse(JSON.stringify(A));

  S.unshift(new Array(A[0].length + 1).fill(0));
  for (let i = 1; i < S.length; i++) {
    S[i].unshift(0);
  }

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[i].length; j++) {
      S[i + 1][j + 1] = S[i + 1][j] + S[i][j + 1] - S[i][j] + A[i][j];
    }
  }

  S.shift();

  for (let i = 0; i < S.length; i++) {
    S[i].shift();
  }
  return S;
}

const r = makePrefixSum(A);
console.log(r);
