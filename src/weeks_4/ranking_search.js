module.exports = solution;

const info = [
  'java backend junior pizza 150',
  'python frontend senior chicken 210',
  'python frontend senior chicken 150',
  'cpp backend senior pizza 260',
  'java backend junior chicken 80',
  'python backend senior chicken 50',
];

const query = [
  'java and backend and junior and pizza 100',
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

  // console.log('==splitInfo====');
  // console.log(splitInfo);
  // console.log('==splitQuery====');
  // console.log(splitQuery);

  for (let i = 0; i < splitQuery.length; i++) {
    const q = splitQuery[i];
    const lastIdx = q.length - 1;

    const findArr = filterling(q, lastIdx, splitInfo);
    // console.log('findArr: ', findArr);
    answer.push(findArr.length);
    // console.log('answer: ', answer);
  }

  function filterling(q, lastIdx, splitInfo) {
    let resultArr = [];

    // 재귀 함수
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
    }

    check(splitInfo, 0);

    return resultArr;
  }

  return answer;
}

const r = solution(info, query);
console.log(r);
