// 문제를 잘못 이해하긴 했지만, 위와 같이 활용하면 될 것 같음
// weeks_2 주차 문제와 같은 것으로 보임
// str 문자열 중에서 가장 많은 갯수를 가진 문자의 갯수 구하기
// str = 'abcaa'
// 3

function solution(str) {
  const storage = {};
  str.split('').forEach((el) => {
    if (!storage.hasOwnProperty(el)) {
      storage[el] = 1;
    } else {
      storage[el] += 1;
    }
  });

  const values = Object.values(storage);

  console.log(storage); // { t: 5, r: 2, u: 2, i: 2, k: 2, a: 1, p: 3, o: 1 }
  return Math.max(...values);
}

const str = 'trutrutiktiktappop';
const result = solution(str);
console.log(result); // 5
