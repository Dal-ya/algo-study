function solution(arr1, arr2) {
  // var answer = arr1.map((v) => v.slice()); // 2차원 배열 값복사
  let answer = [];

  const arrT = zip(arr2); // transpose arr2

  // console.log('transpose arr: ', arrT);

  for (let i = 0; i < arr1.length; i++) {
    let arry = [];

    for (let j = 0; j < arr2[0].length; j++) {
      // console.log('arr1[i]: ', arr1[i]);
      // console.log('arrT[j]', arrT[j]);
      // console.log('multiple: ', multiple(arr1[i], arrT[j]));
      arry.push(multiple(arr1[i], arrT[j]));
    }

    answer.push(arry);
  }

  // console.log('answer: ', answer);

  return answer;
}

// https://stackoverflow.com/questions/4856717/javascript-equivalent-of-pythons-zip-function
function zip(rows) {
  return rows[0].map((_, c) => rows.map((row) => row[c]));
}

function multiple(arrA, arrB) {
  const len = arrA.length;
  let sum = 0;

  for (let i = 0; i < len; i++) {
    sum = sum + arrA[i] * arrB[i];
  }

  return sum;
}
