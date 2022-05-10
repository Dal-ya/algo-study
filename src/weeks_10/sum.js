function makeSumArr(arr) {
  const s = new Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      s[i] = arr[i];
    } else {
      s[i] = s[i - 1] + arr[i];
    }
  }

  return s;
}

const a = [15, 13, 10, 7, 3, 12];

const S = makeSumArr(a);

// console.log(S);

function outputRangeSum(i, j) {
  if (i === 0) {
    return S[j];
  }
  return S[j] - S[i - 1];
}

console.log(outputRangeSum(0, 5));
