function isPassLottos(lottos) {
  const PASS = true;
  const FAIL = false;

  if (lottos.length !== 6) {
    console.log('lottos의 길이는 6이어야 합니다.');
    return FAIL;
  }

  let exceptZero = lottos.filter((num) => num !== 0);
  if (exceptZero.length !== new Set(exceptZero).size) {
    console.log(
      '0을 제외한 다른 숫자들은 lottos에 2개 이상 담겨있지 않습니다.'
    );
    return FAIL;
  }

  const rangeCheckArr = lottos.filter((num) => num < 0 || num > 45);
  if (rangeCheckArr.length > 0) {
    console.log('0 이상 45 이하인 정수이어야 합니다. ', rangeCheckArr);
    return FAIL;
  }

  return PASS;
}

function isPassWinNums(winNums) {
  const PASS = true;
  const FAIL = false;

  if (winNums.length !== 6) {
    console.log('winNums 길이는 6이어야 합니다.');
    return FAIL;
  }

  const rangeCheckArr = winNums.filter((num) => num < 1 || num > 45);
  if (rangeCheckArr.length > 0) {
    console.log('1 이상 45 이하인 정수이어야 합니다. ', rangeCheckArr);
    return FAIL;
  }

  if (winNums.length !== new Set(winNums).size) {
    console.log('같은 숫자가 2개 이상 있어서는 안 됩니다.');
    return FAIL;
  }

  return PASS;
}

function equalNums(lottos, winNums) {
  // 교집합 구하기
  return lottos.filter((num) => winNums.includes(num));
}

function zeroNums(lottos) {
  return lottos.filter((num) => num === 0);
}

function rankByNumsSize(size) {
  switch (size) {
    case 6:
      return 1;
    case 5:
      return 2;
    case 4:
      return 3;
    case 3:
      return 4;
    case 2:
      return 5;
    default:
      return 6;
  }
}

function solution(lottos, win_nums) {
  let answer = [];

  if (!isPassLottos(lottos) || !isPassWinNums(win_nums)) {
    return false;
  }

  const equalNumsSize = equalNums(lottos, win_nums).length;
  const zeroNumsSize = zeroNums(lottos).length;

  const lowestRank = rankByNumsSize(equalNumsSize);
  const topRank = rankByNumsSize(equalNumsSize + zeroNumsSize);

  answer = [topRank, lowestRank];

  return answer;
}

module.exports = solution;
