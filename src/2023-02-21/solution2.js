function solution(numbers) {
  let answer = [];

  let table = new Map();

  numbers.forEach((num, idx) => {
    let backBigNum = null;
    const backNumbers = numbers.slice(idx + 1);

    for (let i = 0; i < backNumbers.length; i++) {
      if (backNumbers[i] > num) {
        backBigNum = backNumbers[i];
        break;
      }
    }

    if (!backBigNum) {
      backBigNum = -1;
    }

    table.set(`num-${Math.random()}}`, backBigNum);
  });

  //   console.log(table);

  table.forEach((value) => {
    answer.push(value);
  });

  //   console.log(answer);
  return answer;
}

solution([2, 3, 3, 5]);
