function solution(k, d) {
  let answer = 0;

  const pointList = [];
  const limit = parseInt(d / k);

  for (let i = 0; i <= limit; i++) {
    let x = i * k;

    for (let j = 0; j <= limit; j++) {
      let y = j * k;

      if (isInDistance(x, y, d)) {
        pointList.push([x, y]);
      }
    }
  }

  answer = pointList.length;

  return answer;
}

/**
 * 원점에서의 거리(d)가 이하인 경우 -> true, 아니면 false
 * @param {number} x
 * @param {number} y
 * @param {number} d 원점에서의 거리
 */
function isInDistance(x, y, d) {
  const hypo = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

  if (d < hypo) {
    return false;
  } else {
    return true;
  }
}
