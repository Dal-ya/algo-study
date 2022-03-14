function solution(s) {
  var answer = 0;

  var sArray = s.split(''); // ['a','b','c'...]

  // init
  var equalCnt = 1;
  var pressString = '';
  var pressSize = 1;
  var pressTempArray = [];

  sArray.forEach((_, idxSarr) => {
    var chunkedArray = chunk(sArray, idxSarr + 1);
    // console.log('chunked: ', chunkedArray);

    chunkedArray.forEach((currentArray, idx) => {
      var nextArray = chunkedArray[idx + 1] || [];
      var isArrayEquals = arrayEquals(currentArray, nextArray);
      if (isArrayEquals) {
        equalCnt += 1;
      } else {
        if (equalCnt >= 2) {
          pressTempArray.push(equalCnt);
          pressTempArray.push(currentArray.join(''));
          equalCnt = 1;
        } else {
          pressTempArray.push(currentArray.join(''));
        }
      }
    });

    if (!pressString) {
      pressString = pressTempArray.join('');
    } else {
      if (pressString.length > pressTempArray.join('').length) {
        pressString = pressTempArray.join('');
        pressSize = idxSarr + 1;
      }
    }

    pressTempArray = []; // reset
  });

  // console.log('press size: ', pressSize);
  // console.log('press string: ', pressString);

  answer = pressString.length;
  return answer;
}

// https://kohlee.tistory.com/entry/Array-Chunking
function chunk(array, size) {
  const chunked = [];

  for (let element of array) {
    const last = chunked[chunked.length - 1];

    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }

  return chunked;
}

// https://masteringjs.io/tutorials/fundamentals/compare-arrays
function arrayEquals(a, b) {
  // return ==> true or false
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

module.exports = solution;
