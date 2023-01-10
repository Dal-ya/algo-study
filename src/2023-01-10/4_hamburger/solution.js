// https://school.programmers.co.kr/learn/courses/30/lessons/133502?language=javascript

function solution(ingredient) {
  let answer = 0;
  let stack = [];

  for (v of ingredient) {
    stack.push(v);

    if (stack.length > 3) {
      if (
        stack.at(-1) === 1 &&
        stack.at(-2) === 3 &&
        stack.at(-3) === 2 &&
        stack.at(-4) === 1
      ) {
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();

        ++answer;
      }
    }
  }

  // console.log(answer);

  return answer;
}

solution([2, 1, 1, 2, 3, 1, 1, 2, 3, 1, 2, 3, 1, 3]);
