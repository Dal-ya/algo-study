// memo
// 자바스크립트 오브젝트 키 찾기
const fruitsColor = {
  apple: 'red',
  banana: 'white',
  orange: 'yellow',
};

console.log(fruitsColor.hasOwnProperty('orange')); // true
console.log(fruitsColor.hasOwnProperty('cherry')); // false

console.log(Object.values(fruitsColor)); // [ 'red', 'white', 'yellow' ]

// new Set으로 중복 제거하기
const pocket = new Set();
pocket.add(1);
pocket.add(2);
pocket.add(3);
pocket.add(2);
console.log(pocket);
