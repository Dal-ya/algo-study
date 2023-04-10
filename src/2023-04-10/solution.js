function solution(k, tangerine) {
  let answer = 0;

  let tempList = [];
  let tangCounter = new Counter(tangerine);

  // console.log(tangCounter);
  // Counter { '1': 1, '2': 2, '3': 2, '4': 1, '5': 2 }

  for (key in tangCounter) {
    tempList.push([key, tangCounter[key]]);
  }

  tempList.sort((a, b) => b[1] - a[1]);

  // console.log(tempList);
  // [ [ '2', 2 ], [ '3', 2 ], [ '5', 2 ], [ '1', 1 ], [ '4', 1 ] ]

  for (let i = 0; i < tempList.length; i++) {
    // console.log('k: ', k);
    // k: 6 > k: 4 > k: 2
    k -= tempList[i][1];
    if (k <= 0) {
      answer = i + 1;
      break;
    }
  }

  return answer;
}

// https://stackoverflow.com/questions/26320253/is-there-a-javascript-function-similar-to-the-python-counter-function
function Counter(array) {
  array.forEach((val) => (this[val] = (this[val] || 0) + 1));
}

// solution(6, [1, 3, 2, 5, 4, 5, 2, 3]);
