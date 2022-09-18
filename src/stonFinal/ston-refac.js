/**
 *
 * @param {number} SET_CNT
 * @param {number} PAN_CNT
 * @param {array} BASE_PANS
 * @param {array} FRUITS
 * @param {array} TOPINGS
 */
function StonPans(SET_CNT, PAN_CNT, BASE_PANS, FRUITS, TOPINGS) {
  this.SET_CNT = SET_CNT;
  this.PAN_CNT = PAN_CNT;
  this.BASE_PANS = BASE_PANS;
  this.FRUITS = FRUITS;
  this.TOPINGS = TOPINGS;

  this.STON_PAN_ONE_SET = null;
  this.STON_PAN_SETS = null;

  // 단일 빵 세트 만들기
  this.makePanOneSet = function () {
    var distriCntList = makeDistributionBasePanCnt(
      this.PAN_CNT,
      this.BASE_PANS
    );

    var tempPanList = [];

    var pan = makePan(this.FRUITS, this.TOPINGS);

    for (let i = 0; i < PAN_CNT; i++) {
      tempPanList.push(pan());
    }

    shuffle(tempPanList);

    var panList = addBasePan(tempPanList, distriCntList, this.BASE_PANS);

    // 셔플 추가로 더하기
    var filterPanList = filterPans(this.BASE_PANS, panList, shuffle);

    this.STON_PAN_ONE_SET = filterPanList;

    return filterPanList;
  };

  // 여러개 빵 세트
  this.makePanSets = function () {
    var stonPanSets = {};

    var loopCnt = 1;

    while (loopCnt <= this.SET_CNT) {
      stonPanSets['PanSet' + loopCnt] = this.makePanOneSet();
      loopCnt++;
    }

    // console.log(stonPanSets.PanSet1);

    this.STON_PAN_SETS = stonPanSets;

    return stonPanSets;
  };

  // 단일 빵 세트 보여주기(콘솔)
  this.showPanOneSet = function () {
    console.log('==== STON PAN SET ====');
    console.log(JSON.stringify(this.STON_PAN_ONE_SET, null, 2));
  };

  // 여러개 빵 세트 보여주기(콘솔)
  this.showPanSets = function () {
    console.log('==== STON PAN SETS ====');
    console.log(JSON.stringify(this.STON_PAN_SETS, null, 2));
  };

  // 출처: https://milkteakang.tistory.com/297
  // 범위에 해당하는 값 랜덤 추출
  function getRandRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // 기본 빵들을 빵 세트를 기준으로 균일하게 나누기
  function makeDistributionBasePanCnt(panCnt, basePans) {
    var distributionCntList = [];

    for (var i = basePans.length; i > 0; i--) {
      if (i === 1) {
        distributionCntList.push(panCnt);

        break;
      }

      var cnt = parseInt(panCnt / i);

      distributionCntList.push(cnt);

      panCnt -= cnt;
    }

    shuffle(distributionCntList);

    // console.log(distributionCntList);
    return distributionCntList;
  }

  // 셔플 함수, 원본 array 변경 주의!
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  // 기본 빵을 제외한 빵 만들기
  function makePan(fruits, topings) {
    var serialNumber = 0;

    return function () {
      serialNumber += 1;

      var pickBase = 'base';
      var pickFruit = fruits[getRandRange(0, fruits.length - 1)];
      var pickToping = topings[getRandRange(0, topings.length - 1)];

      return {
        serialNumber: serialNumber,
        base: pickBase,
        fruit: pickFruit,
        toping: pickToping,
        getName: function () {
          return (
            pickFruit + ' ' + pickToping + ' ' + pickBase + ' #' + serialNumber
          );
        },
      };
    };
  }

  // 균등 분포로 기본 빵 추가하기
  function addBasePan(tempPanList, distriCntList, basePans) {
    var resultList = [];

    for (var i = 0; i < distriCntList.length; i++) {
      var splicePanList = tempPanList.splice(0, distriCntList[i]);

      splicePanList.forEach((pan) => (pan.base = basePans[i]));

      resultList = resultList.concat(splicePanList);
    }

    return resultList;
  }

  // 기본 빵을 키로 하는 필터 & 셔플 적용
  function filterPans(basePans, panList, shuffle) {
    var result = {};

    basePans.forEach((basePan) => {
      var filterList = panList.filter((pan) => pan.base === basePan);

      shuffle(filterList);

      result[basePan] = filterList;
    });

    return result;
  }
}

module.exports = StonPans;
