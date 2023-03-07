/*
https://school.programmers.co.kr/learn/courses/30/lessons/154538
x	y	n	result
10	40	5	2
10	40	30	1
2	5	4	-1
*/

// bfs 개념
// https://heytech.tistory.com/56

// DP 솔루션
// https://studyposting.tistory.com/93 (잘 안 됨)
// https://americanoisice.tistory.com/196

function solution(x, y, n) {
  let answer = 0;
  let s = new Set();
  s.add(x);

  while (s) {
    if (s.has(y)) {
      console.log(answer);
      return answer;
    }

    let nxt = new Set();

    s.forEach((i) => {
      if (i + n <= y) {
        nxt.add(i + n);
      }

      if (i * 2 <= y) {
        nxt.add(i * 2);
      }

      if (i * 3 <= y) {
        nxt.add(i * 3);
      }
    });

    s = nxt;
    answer += 1;
  }

  return -1;
  // console.log(answer);
  // return answer;
}

solution(2, 5, 4);
// solution(10, 40, 30);
// solution(2, 5, 4);
