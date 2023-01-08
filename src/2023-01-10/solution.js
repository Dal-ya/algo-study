// 두 직선의 위치 관계
// 평행하거나 일치하는 경우 1을 반환한다.

/**
 *
 * @param {number[][]} dots
 * @returns number;
 */
function solution(dots) {
  var answer = 0;

  // 비교를 해야할 경우의 수는 3가지
  // 기울기가 같으면 평행하거나 일치
  if (CalculateSlope(dots[0], dots[1]) === CalculateSlope(dots[2], dots[3])) {
    return ++answer;
  }

  if (CalculateSlope(dots[0], dots[2]) === CalculateSlope(dots[1], dots[3])) {
    return ++answer;
  }

  if (CalculateSlope(dots[0], dots[3]) === CalculateSlope(dots[1], dots[2])) {
    return ++answer;
  }

  return answer;
}

/**
 * 두 점을 지나는 직선의 기울기 구하기
 * @param {number[x1, y1]} dot1
 * @param {number[x2, y2]} dot2
 * @returns number
 */
function CalculateSlope(dot1, dot2) {
  // 기울기 slope
  let slope = null;

  slope = (dot2[1] - dot1[1]) / (dot2[0] - dot1[0]);

  return slope;
}

const dots = [
  [1, 4],
  [9, 2],
  [3, 8],
  [11, 6],
];
console.log(solution(dots));
