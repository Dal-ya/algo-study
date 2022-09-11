var SET_CNT = 2; // 세트 개수
var PAN_CNT = 11; // 세트당 빵 개수

var basePans = ['donut', 'bread', 'croissant'];

var fruits = [
  'strawberry',
  'watermelon',
  'grape',
  'pear',
  'orange',
  'grapefruit',
  'melon',
  'coconut',
];

var topings = [
  'choco',
  'vanila',
  'caramel',
  'honey',
  'milk',
  'dalgona',
  'flakes',
  'protien',
];

// 기본 빵들의 개별 확률 입력
var listItem = [];

listItem[basePans[0]] = 33.33333;
listItem[basePans[1]] = 33.33333;
listItem[basePans[2]] = 33.33333;

// 출처: https://milkteakang.tistory.com/297
// 범위에 해당하는 값 랜덤 추출
function getRandRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 출처: https://milkteakang.tistory.com/297
// 가중치 확률 랜덤 추출
function getRandWeight(listItem) {
  var pickVal = Number.MAX_VALUE;
  var pickItem = null;
  for (var item in listItem) {
    // console.log('item: ', item);
    if (listItem.hasOwnProperty(item)) {
      var tmpVal = -Math.log(Math.random()) / listItem[item];
      if (tmpVal < pickVal) {
        pickVal = tmpVal;
        pickItem = item;
      }
    }
  }
  return pickItem;
}

function makePan() {
  var serialNumber = 0;

  return function () {
    serialNumber += 1;

    var pickBase = getRandWeight(listItem);
    var pickFruit = fruits[getRandRange(0, fruits.length - 1)];
    var pickToping = topings[getRandRange(0, topings.length - 1)];

    return {
      serialNumber: serialNumber,
      base: pickBase,
      fruit: pickFruit,
      toping: pickToping,
      getName: function () {
        // return `${pickFruit} ${pickToping} ${pickBase} #${serialNumber}`;
        return (
          pickFruit + ' ' + pickToping + ' ' + pickBase + ' #' + serialNumber
        );
      },
    };
  };
}

function filterPans(basePans, panList) {
  var result = {};

  basePans.forEach((basePan) => {
    var filterList = panList.filter((pan) => pan.base === basePan);

    shuffle(filterList);

    result[basePan] = filterList;
  });

  return result;
}

// 원본 array 변경 주의
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

/* --------------------------------------------------------- */

var stonPanSets = {};

var loopCnt = 1;

while (loopCnt <= SET_CNT) {
  var tempPanList = [];

  var pan = makePan();

  for (let i = 0; i < PAN_CNT; i++) {
    tempPanList.push(pan());
  }

  stonPanSets['PanSet' + loopCnt] = filterPans(basePans, tempPanList.slice());

  loopCnt++;
}

console.log(stonPanSets);
