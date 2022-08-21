// 출처: https://mine-it-record.tistory.com/508 [나만의 기록들:티스토리]
const getPermutations = (arr, num) => {
  const results = [];

  // nP1 이며, 1이면 의미 없기때문에 바로 반환한다.
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((fixed, index, origin) => {
    // 순열에서는 조합과 달리 순서만 바뀌면 중복이 아니기때문에 기준값을 제외한 나머지 배열을 넣어준다.
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    // console.log('rest: ', rest);

    // 나머지 배열을 기준으로 다시 순열을 구한다.
    // 기준값(fixed)이 있기 때문에 선택하려는 개수에서 - 1 을 해준다.
    const permutations = getPermutations(rest, num - 1);

    // 기준값(fixed)에 순열(permutations)을 붙인다.
    const attached = permutations.map((v) => [fixed, ...v]);

    // 붙인 값을 결과 값에 넣어준다.
    results.push(...attached);
  });

  return results;
};

// const r = getPermutations([1, 2, 3], 3);
// console.log(r);

// https://mong-blog.tistory.com/entry/1N%EA%B9%8C%EC%A7%80%EC%9D%98-%EC%88%AB%EC%9E%90-%EB%B0%B0%EC%97%B4-%EB%A7%8C%EB%93%A4%EA%B8%B0with-js
const genArr = (n) => {
  return Array.from({ length: n }, (_, i) => i + 1);
};

function solution(n, k) {
  if (n > 20) {
    return;
  }
  
  const arr = genArr(n);

  const permutionList = getPermutations(arr, n);

  // console.log(permutionList);

  return permutionList[k - 1];
}

const result = solution(3, 5);
console.log(result);
