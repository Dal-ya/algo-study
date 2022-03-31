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
    const a = splitInfo.filter((arr) => {
      if (splitQuery[i][0] === '-') {
        return splitInfo;
      }
      return (
        arr[0] === splitQuery[i][0] ||
        Number(arr[0]) >= Number(splitQuery[i][0])
      );
    });

    const b = a.filter((arr) => {
      if (splitQuery[i][1] === '-') {
        return a;
      }
      return (
        arr[1] === splitQuery[i][1] ||
        Number(arr[1]) >= Number(splitQuery[i][1])
      );
    });

    const c = b.filter((arr) => {
      if (splitQuery[i][2] === '-') {
        return b;
      }
      return (
        arr[2] === splitQuery[i][2] ||
        Number(arr[2]) >= Number(splitQuery[i][2])
      );
    });

    const d = c.filter((arr) => {
      if (splitQuery[i][3] === '-') {
        return c;
      }
      return (
        arr[3] === splitQuery[i][3] ||
        Number(arr[3]) >= Number(splitQuery[i][3])
      );
    });

    const e = d.filter((arr) => {
      if (splitQuery[i][4] === '-') {
        return d;
      }
      return (
        arr[4] === splitQuery[i][4] ||
        Number(arr[4]) >= Number(splitQuery[i][4])
      );
    });

    // console.log('eeee:');
    // console.log(e);
    answer.push(e.length);
  }

  // console.log('answer: ', answer);
  return answer;
}

solution(info, query);
