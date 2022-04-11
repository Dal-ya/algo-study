// https://im-developer.tistory.com/126

// 이진 탐색
// O(log N)

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 찾고자 하는 값 => 3
// 3 < 5 => [1, 2, 3, 4]
// 3 > 2 => [3, 4]

// 1~100 숫자 중 하나의 숫자를 검색하면 7번이면 가능
// 40억개의 데이터도 32번만의 검색 가능

// 단 데이터가 정렬되어 있어야 한다

function binarySearch(arr, target) {
  // 배열 오름차순 정렬
  arr.sort((a, b) => a - b);

  let low = 0; // start index
  let high = arr.length - 1; // end index
  let mid; // middle value

  while (low <= high) {
    mid = parseInt((low + high) / 2);

    if (target === mid) {
      return mid;
    } else if (target < mid) {
      high = mid - 1;
    } else if (target > mid) {
      low = mid + 1;
    }
  }

  return null;
}

const result = binarySearch([14, 1, 2, 3, 4, 5, 7, 13], 7);
console.log('result: ', result);
