// line 의 모든 교점 찾기
function findPoint(line) {
  let result = [];

  for (let i = 0; i < line.length - 1; i++) {
    for (let j = i + 1; j < line.length; j++) {
      const [A, B, E] = line[i];
      const [C, D, F] = line[j];

      // 평행 또는 일치인 경우
      if (A * D - B * C === 0) {
        continue;
      }

      const x = (B * F - E * D) / (A * D - B * C);
      const y = (E * C - A * F) / (A * D - B * C);

      // 정수 여부 확인
      if (Number.isInteger(x) && Number.isInteger(y)) {
        result.push([x, y]);
      }
    }
  }

  return result;
}

// 교점 x,y의 최댓값, 최솟값 찾기
function findMaxMin(pointList) {
  const arr = pointList.flat();

  const xArr = arr.filter((_, i) => i % 2 === 0);
  const yArr = arr.filter((_, i) => i % 2 !== 0);

  const maxX = Math.max(...xArr);
  const maxY = Math.max(...yArr);

  const minX = Math.min(...xArr);
  const minY = Math.min(...yArr);

  // console.log({
  //   maxX,
  //   minX,
  //   maxY,
  //   minY,
  // });

  return {
    maxX,
    minX,
    maxY,
    minY,
  };
}

// 백그라운드 만들기
function genBackground(maxMin) {
  const xLen = maxMin.maxX - maxMin.minX + 1;
  const yLen = maxMin.maxY - maxMin.minY + 1;

  // 이차원 배열 만들기
  return Array.from(Array(yLen), () => Array(xLen).fill('.'));
}

// 별 찍기
function printStar(pointList, maxMin, backGround) {
  // x, y 좌표 -> row, col 좌표로 변환
  const changePointList = pointList.map((point) => {
    const maxX = maxMin.maxX;
    const maxY = maxMin.maxY;

    const x = point[0];
    const y = point[1];

    const row = maxY - y;
    const col = maxX + x;

    return [row, col];
  });

  // console.log(changePointList);

  changePointList.forEach((point) => {
    const row = point[0];
    const col = point[1];

    backGround[row][col] = '*';
  });

  return backGround.map((arr) => arr.join('')).flat();
}

// solution function
function solution(line) {
  const pointList = findPoint(line);
  const maxMin = findMaxMin(pointList);
  const background = genBackground(maxMin);

  const answer = printStar(pointList, maxMin, background);
  console.log(answer);

  return answer;
}

const line = [
  [2, -1, 4],
  [-2, -1, 4],
  [0, -1, 1],
  [5, -8, -12],
  [5, 8, 12],
];

solution(line);
