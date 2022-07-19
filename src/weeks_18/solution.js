function solution(n, left, right) {
  var answer = [];

  const nArr = genArr(n);

  answer = nArr.flat().slice(left, right + 1);

  console.log('answer: ', answer);

  return answer;
}

function genArr(n, target) {
  if (n === 0) {
    return target;
  }

  // n의 값으로 채워진 2차원 배열 만들기
  const arr = Array.from(Array(n), () => Array(n).fill(n));
  // console.log('arr: ', arr);
  // console.log('target: ', target);

  const copyArr = arr.map((v) => v.slice()); // 2차원 배열 값복사

  if (!target) {
    return genArr(n - 1, copyArr);
  }

  const copyTarget = target.map((v) => v.slice()); // 2차원 배열 값복사

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      copyTarget[i][j] = arr[i][j];
    }
  }

  return genArr(n - 1, copyTarget);
}

solution(3, 2, 5);
