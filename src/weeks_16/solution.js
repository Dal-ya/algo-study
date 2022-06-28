function solution(n, words) {
  var answer = [0, 0];

  let wIdx = -1; // wrong word idx

  for (let i = 1; i < words.length; i++) {
    if (
      !checkWrongWord(words[i - 1], words[i]) ||
      !checkEqualWord(words[i], words.slice(0, i))
    ) {
      wIdx = i;
      break;
    }
  }

  console.log(wIdx);

  if (wIdx !== -1) {
    let player = parseInt(wIdx % n) + 1;

    let times = parseInt(wIdx / n) + 1;

    // console.log(times);
    // console.log(player);

    answer = [player, times];
  }

  return answer;
}

function checkWrongWord(prev, curr) {
  if (prev[prev.length - 1] !== curr[0]) {
    return false;
  }

  return true;
}

function checkEqualWord(curr, prevWords) {
  if (prevWords.includes(curr)) {
    return false;
  }

  return true;
}

// const arr = ['hello', 'one', 'even', 'never', 'now', 'world', 'draw'];

// const r = solution(2, arr);
// console.log(r);
