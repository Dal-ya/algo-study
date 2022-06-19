function solution(orders, course) {
  var answer = [];
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

  let maxMenu = [];

  for (let key in obj) {
    if (obj[key] === maxNum) {
      maxMenu.push(key);
    }
  }

  // console.log(maxMenu);

  return maxMenu;
}

// n 값 만큼 조합을 넘겨주는 함수
// n: 2, str: 'ABC' ===> ['AB', 'AC', 'BC]:
// n: 3, str: 'ABC' ===> ['ABC']
function menu(str, n) {
  let r = [];

  for (let i = 0; i < str.length - 1; i++) {
    for (let j = i + n - 1; j < str.length; j++) {
      r.push(`${str.slice(i, i + n - 1)}${str[j]}`);
    }
  }

  // console.log(r);
  return r;
}
