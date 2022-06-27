// 알파벳 대문자로 이루어진 원판(바깥, 안쪽) 만들기
var AZ = new Array(26);

for (var i = 0; i < AZ.length; i++) {
  AZ[i] = String.fromCharCode(i + 97).toUpperCase();
}

var outList = [].concat(AZ); // 바깥쪽 알파벳 리스트
var inList = [].concat(AZ); // 안쪽 알바펫 리스트

// 매개변수 조건
// 알파벳 대문자
// 길이가 서로 같음
function enc(keyword, plainText) {
  var plainTextArr = plainText.split(''); // ['R', 'O', 'S', 'E']
  var keywordArr = keyword.split(''); // ['L', 'E', 'O', 'N']
  var encTextArr = []; // ['C', 'S', 'G', 'R']

  for (var i = 0; i < keywordArr.length; i++) {
    var plainTextIdx = outList.indexOf(plainTextArr[i]);
    var keywordIdx = inList.indexOf(keywordArr[i]);

    // ['L', 'M', ... 'K', 'A', 'B',...'Z']
    var renewInList = inList
      .slice(keywordIdx)
      .concat(inList.slice(0, keywordIdx));

    encTextArr.push(renewInList[plainTextIdx]);
  }

  return encTextArr.join('');
}

// 매개변수 조건
// 알파벳 대문자
// 길이가 서로 같음
function dec(keyword, encText) {
  var encTextArr = encText.split(''); // ['C', 'S', 'G', 'R']
  var keywordArr = keyword.split(''); // ['L', 'E', 'O', 'N']
  var decTextArr = [];

  for (var i = 0; i < keywordArr.length; i++) {
    var keywordIdx = inList.indexOf(keywordArr[i]);

    // ['L', 'M', ... 'K', 'A', 'B',...'Z']
    var renewInList = inList
      .slice(keywordIdx)
      .concat(inList.slice(0, keywordIdx));

    var encTextIdx = renewInList.indexOf(encTextArr[i]);

    decTextArr.push(outList[encTextIdx]);
  }

  return decTextArr.join('');
}

var KEYWORD = 'LEON';
var PLAINT_TEXT = 'ROSE';
var ENCRYPT_TEXT = 'CSGR';

var ENC_TEXT = enc(KEYWORD, PLAINT_TEXT);
console.log('ENC_TEXT: ', ENC_TEXT);

var DEC_TEXT = dec(KEYWORD, ENCRYPT_TEXT);
console.log('DEC_TEXT: ', DEC_TEXT);
