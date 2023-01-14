let answer = [];
function hanoi(num: number, from: number, to: number, other: number) {
  // num: 원반의 수
  // from: 원반들이 위치한 곳의 번호
  // to: 원반들을 옮길 목적지 번호
  // other: 나머지 한 곳(목적지가 아닌) 곳 번호

  // 모두 옮겼으면 종료
  if (num === 0) return;

  // 가장 아래 원반을 제외한 원반들을 재귀적으로 목적지가 아닌 곳으로 옮김
  hanoi(num - 1, from, other, to);

  // 가장 아래 원반을 목적지로 옮김
  console.log(`${from}번에서 ${to}로 옮긴다.`);
  answer.push([from, to]);

  // 목적지가 아닌 곳으로 옮겼던 원반들을 재귀적으로 목적지로 옮김
  hanoi(num - 1, other, to, from);
}
const r = hanoi(2, 1, 3, 2);
console.log(answer);

/*
0> n:2, f:1, t:3, o:2 log(1, 3) - 2
  1> n:1, f:1, t:2, o:3 log(1, 2) -1
    2> n:0, f:1, t:3, o:2 undefined
    3> n:0, f:3, t:2, o:3 undefined

  3> n:1, f:2, t:3, o:1 log(2, 3) - 3
    4> n:0, f:2, t:1, o:3 undefined
    5> n:0, f:1, t:3, o:1 undefined
*/
