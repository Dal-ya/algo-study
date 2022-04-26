// 요세푸스 문제
// https://www.youtube.com/watch?v=MHarxFDYBw8

// 요세푸스
// 유다이아 전쟁에서 패배하고 로마군에게 포위당한 상황 (41명)
// 유대교 교리상 자살은 할 수 없음
// 요세푸스가 제안한 방식으로 서로를 제외
// 1,2,3,4,5... -> N명의 사람과 K번째 제외(remove)
// 예) 5명 2번
// 1, 2, 3, 4, 5
// 1, 3, 4, 5  (2)
// 1, 3, 5 (2, 4)
// 3, 5 (2, 4, 1)
// 3 (2, 4, 1, 5)

// queue, circular linked list, 점화식(공식)-수학적 유도(콘크리트 수학책)

// Circular Linked List 를 이용해서 푸는 방법(?)
function josepSequence(N, K) {
  // 1부터 정해진 숫자 채우기
  // https://velog.io/@sy3783/JS%EB%B0%B0%EC%97%B4-%EC%B1%84%EC%9A%B0%EA%B8%B0
  let q = Array.from(new Array(N), (x, i) => i + 1);
  console.log('q: ', q);
  let removeIdx = 0;

  let resultArr = [];

  while (q.length > 1) {
    removeIdx = (removeIdx + K - 1) % q.length;
    console.log('removeIdx: ', removeIdx);
    console.log('remove: ', q[removeIdx]);
    resultArr.push(q[removeIdx]);
    q = q.filter((_, idx) => removeIdx !== idx);
  }
  // console.log([...resultArr, ...q]);
  // return q;
  return [...resultArr, ...q];
}

const result = josepSequence(7, 3);
console.log('result: ', result); // result:  [3, 6, 2, 7, 5, 1, 4]

// Array.from()
// Array.from('abc') ==> Array ['a', 'b', 'c']
// Array.from([1,2,3], x => x + x) ==> Array [2, 4, 6]
// Array.from([undefined, undefined, undefined], (x,i)=> i + 1) ==> Array [1, 2, 3]