// orderList, courseList 는 오름차순으로 전부 정렬되어 있다고 가정.

function solution(orders, course) {
  var answer = [];

  for (let i = 0; i < course.length; i++) {
    let menuList = [];

    for (let j = 0; j < orders.length; j++) {
      const r = genMenu(orders[j].split(''), course[i]);
      menuList.push(...r);
      // console.log(menuList);
    }

    answer.push(...rankMenu(menuList));
  }

  answer.sort();

  return answer;
}

// menuList 중에서 가장 많이 노출된 menu 구하기 (복수개 가능)
// menuList = ['AB', 'AC', 'AB', 'DE', 'DF', 'DF']
// return ===> ['AB', 'DF']
function rankMenu(menuList) {
  const keyArr = [...new Set(menuList)];

  let obj = {};

  /*
    {
      A: 0,
      B: 0,
      C: 0,
    }
  */

  keyArr.forEach((key) => {
    obj[key] = 0;
  });

  menuList.forEach((m) => ++obj[m]);

  // console.log(obj);

  const maxNum = Math.max(...Object.values(obj));

  if (maxNum < 2) {
    return [];
  }

  let maxMenu = [];

  for (let key in obj) {
    if (obj[key] === maxNum) {
      maxMenu.push(key);
    }
  }

  // console.log(maxMenu);

  return maxMenu;
}

// n 값 만큼 조합을 넘겨주는 함수(조합 구하는 함수)
// n: 2, strArr: ['A', 'B', 'C'] ==> ['AB', 'AC', 'BC']
// 'AB', 'BA' 는 같은 것으로 sort 를 이용해 오름차순으로 정렬한다 'AB': 2

// combination 구하기 참고
// https://velog.io/@devjade/JavaScript%EB%A1%9C-%EC%88%9C%EC%97%B4%EA%B3%BC-%EC%A1%B0%ED%95%A9-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
function genMenu(strArr, n) {
  let r = [];
  let temp = []; // [ ['A', 'B'], ['A', 'C'], ...]

  if (n === 1) {
    return strArr;
  }

  strArr.forEach((v, i, arr) => {
    const rest = arr.slice(i + 1);
    const c = genMenu(rest, n - 1); // combination
    const a = c.map((el) => [v, ...el]);
    temp.push(...a);
  });

  temp.forEach((el) => {
    // 'XW' 와 'WX' 는 같은 것이므로 sort 로 오름차순으로 정렬한다
    // 'WX' 는 2개가 된다
    r.push(el.sort().join(''));
  });

  return r;
}

const orderList = ['XYZ', 'XWY', 'WXA'];
const courseList = [2, 3, 4];
const r = solution(orderList, courseList);
console.log('result: ', r);
