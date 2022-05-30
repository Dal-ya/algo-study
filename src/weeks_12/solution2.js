function solution(nums) {
  var answer = 0;

  const expectMaxVal = nums.length / 2;

  const setNumSize = new Set(nums).size;

  if (setNumSize > expectMaxVal || setNumSize === expectMaxVal) {
    answer = expectMaxVal;
  } else {
    answer = setNumSize;
  }

  return answer;
}

const r = solution([3, 3, 3, 2, 2, 2]);
console.log(r);
