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

  console.log(storage);
  return Math.max(...values);
}

const str = 'trutrutiktiktappop';
const result = solution(str);
console.log(result);

// 문제를 잘못 이해하긴 했지만, 위와 같이 활용하면 될 것 같음
// weeks_2 주차 문제와 같은 것으로 보임
