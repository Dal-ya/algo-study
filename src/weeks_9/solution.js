function solution(n, lost, reserve) {
  var answer = 0;

  let lostCnt = lost.length;

  for (let i = 0; i < lost.length; i++) {
    for (let j = 0; j < reserve.length; j++) {
      if (reserve.includes(lost[i])) {
        lostCnt -= 1;
        reserve = reserve.filter(stu => stu !== lost[i]);
        break;
      } else if (
        reserve[j] === lost[i] - 1 ||
        reserve[j] === lost[i] + 1
      ) {
        lostCnt -= 1;
        reserve = reserve.filter(stu => stu !== reserve[j]);
        break;
      }
    }
  }

  answer = n - lostCnt;

  return answer;
}

const result = solution(5, [1, 3], [1, 4, 5]);
console.log(result);

module.exports = solution;