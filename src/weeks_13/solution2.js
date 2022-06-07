// https://programmers.co.kr/learn/courses/30/lessons/86051
// 없는 숫자 더하기

function solution(numbers) {
  let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return numArr
    .filter((v) => !numbers.includes(v))
    .reduce((acc, cur) => acc + cur);
}

const r = solution([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(r);
