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

// corse 값 만큼 order를 나누기
// ex) corse: 2 ==> order 'abcd' ==> 'ab' ,'ac', 'ad' 'bc' ....
// order가 orderList 에 얼마나 많이 있는 지 확인하고
// 가장 많이 나온 order 들을 리턴하면 됨.

// orderList, courseList 는 오름차순으로 전부 정렬되어 있다고 가정.

// menuList 중에서 가장 많이 노출된 menu 구하기 (복수개 가능)
// menuList = ['AB', 'AC', 'AB', 'DE', 'DF', 'DF']
// return ===> ['AB', 'DF']
function rankMenu(menuList) {
  const keyArr = [...new Set(menuList)];

  let obj = {};

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
    // 'XW' 와 'XW' 는 같은 것이므로 sort 로 정렬한다
    r.push(el.sort().join(''));
  });

  return r;
}

const orderList = ['XYZ', 'XWY', 'WXA'];
const courseList = [2, 3, 4];
const r = solution(orderList, courseList);
console.log('result: ', r);
