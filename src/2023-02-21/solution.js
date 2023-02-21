function solution(numbers) {
  var answer = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    answer.push(-1);

    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] < numbers[j]) {
        answer[i] = numbers[j];
        break;
      }
    }
  }

  answer.push(-1);
  console.log(answer);
  return answer;
}

solution([9, 1, 5, 3, 6, 2]);

// [9, 1, 5, 3, 6, 2]
// [-1, 5, 6, 6, -1, -1]

// [2, 3, 3, 5]
//[3, 5, 5, -1]
