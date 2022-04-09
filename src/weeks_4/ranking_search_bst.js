// https://www.youtube.com/watch?v=vFwVvJQnC4M
// 개발자로 취직하기 님 코드 참고

const info = [
  'java backend junior pizza 150',
  'python frontend senior chicken 210',
  'python frontend senior chicken 150',
  'cpp backend senior pizza 260',
  'java backend junior chicken 80',
  'python backend senior chicken 50',
];

const query = [
  // 'java and backend and junior and pizza 100',
  // 'python and frontend and senior and chicken 200',
  // 'cpp and - and senior and pizza 250',
  // '- and backend and senior and - 150',
  // '- and - and - and chicken 100',
  '- and - and - and - 150',
];

function solution(info, query) {
  var answer = [];

  // hashMap 만들기
  let hashMap = {};
  for (let str of info) {
    const data = str.split(' '); // ['java', 'backend', 'junior', 'pizza', '150']
    const languages = [data[0], '-'];
    const positions = [data[1], '-'];
    const levels = [data[2], '-'];
    const foods = [data[3], '-'];
    const value = parseInt(data[4]);

    for (let lang of languages) {
      for (let position of positions) {
        for (let level of levels) {
          for (let food of foods) {
            const keyData = [lang, position, level, food];
            const key = keyData.join(' ');
            // 키가 없는 경우
            if (!hashMap.hasOwnProperty(key)) {
              hashMap = { ...hashMap, [key]: [value] };
            } else {
              // 키가 있는 경우
              hashMap[key].push(value);
            }
          }
        }
      }
    }
  }

  // console.log('hashMap: ', hashMap);

  // hashMap 의 value 를 오름차순으로 정렬하기
  Object.values(hashMap).forEach((valueList) =>
    valueList.sort((a, b) => a - b)
  );

  // console.log(hashMap);

  // query 조건에 맞는 지원자 찾기
  answer = new Array(query.length);
  let answerIdx = 0;

  for (let q of query) {
    const data = q.split(' and '); // ['java', 'backend', 'junior', 'pizza 100']
    const target = parseInt(data[3].split(' ')[1]);
    data[3] = data[3].split(' ')[0];
    const key = data.join(' ');
    // console.log('key: ', key);

    // bts
    if (hashMap.hasOwnProperty(key)) {
      const valueList = hashMap[key]; // valueList:  [ 50, 80, 150, 150, 210, 260 ]
      // console.log('valueList: ', valueList);
      let left = 0;
      let right = valueList.length;
      while (left < right) {
        let mid = parseInt((left + right) / 2);
        if (valueList[mid] >= target) {
          right = mid;
        } else {
          left = mid + 1;
        }

        answer[answerIdx] = valueList.length - left;
      }
      answerIdx++;
    }
  }

  console.log(answer);
  return answer;
}

solution(info, query);
