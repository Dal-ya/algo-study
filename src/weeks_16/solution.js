function solution(n, words) {
  var answer = [];

  return answer;
}

function findEqualWord(list) {
  for (let i = 0; i < list.length; i++) {
    // 동일한 단어가 존재하는 경우
    var r = list.slice(i + 1).indexOf(list[i]);
    if (r !== -1) {
      console.log(r + i + 1);
    } else {
      console.log(r);
    }
  }
}

const arr = [
  'tanka',
  'kick',
  'know',
  'wheel',
  'land',
  'dream',
  'mother',
  'wheela',
  'mother',
];

findEqualWord(arr);
