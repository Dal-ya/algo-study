module.exports = solution;

const info = [
  'java backend junior pizza 150',
  'python frontend senior chicken 210',
  'python frontend senior chicken 150',
  'cpp backend senior pizza 260',
  'java backend junior chicken 80',
  'python backend senior chicken 50',
  'java backend junior chicken 150',
];

const query = [
  'java and backend and junior and - 100',
  'python and frontend and senior and chicken 200',
  'cpp and - and senior and pizza 250',
  '- and backend and senior and - 150',
  '- and - and - and chicken 100',
  '- and - and - and - 150',
];

function solution(info, query) {
  var answer = [];

  function splitSpaceAnd(arr) {
    return arr.map((str) => str.split(' and ').join(' ').split(' '));
  }

  const splitInfo = splitSpaceAnd(info);
  const splitQuery = splitSpaceAnd(query);

  console.log('==splitInfo====');
  console.log(splitInfo);
  console.log('==splitQuery====');
  console.log(splitQuery);

  const q = splitQuery[0]; // 한줄만 테스트
  const lastIdx = q.length - 1;

  let resultArr = [];
  function check(list, idx) {
    const r = list.filter((arr) => {
      if (q[idx] === '-') {
        return list;
      }
      return arr[idx] === q[idx] || Number(arr[idx]) >= Number(q[idx]);
    });

    if (idx < lastIdx) {
      idx++;
      check(r, idx);
    } else {
      resultArr = [...r];
    }
    // resultArr = [...r];

    // console.log('resultArr: ', resultArr);
    return resultArr;
  }

  console.log('----------------');
  const rrr = check(splitInfo, 0);
  console.log('rrr: ', rrr);
  // console.log(check(splitInfo, 0));
  // console.log(check(check(splitInfo, 0), 1));
  // console.log(check(check(check(splitInfo, 0), 1), 2));

  return answer;
}

solution(info, query);
