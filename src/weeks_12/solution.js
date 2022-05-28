function solution(files) {
  let answer = [];

  const sepFiles = files.map((file, idx) => {
    return sep(file, idx);
  });

  sepFiles.sort((a, b) => {
    if (a.head > b.head) return 1;
    if (a.head < b.head) return -1;
    if (a.head === b.head) {
      if (a.num === b.num) {
        return a.fIdx - b.fIdx;
      }

      return parseInt(a.num) - parseInt(b.num);
    }
  });

  answer = sepFiles.map(f => f.name);

  return answer;
}

function sep(f, idx = 0) {
  let headArea = [];
  let numArea = [];
  let tailArea = '';

  let isNumStart = false;

  for (let i = 0; i < f.length; i++) {
    if (Number.isInteger(parseInt(f[i]))) {
      isNumStart = true;
      numArea.push(f[i]);
      continue;
    }

    if (!isNumStart) {
      headArea.push(f[i]);
      continue;
    }

    tailArea = f.slice(i);
    break;
  }

  return {
    name: f,
    head: headArea.join('').toLowerCase(),
    num: numArea.join(''), // string
    tail: tailArea,
    fIdx: idx, // 기존 files 의 인덱스 (우선 순위 확인용)
  };
}

const testFiles = [
  'img12.png', 'img10.png',
  'img02.png', 'img1.png',
  'IMG01.GIF', 'img2.JPG',
];

const testFiles2 = [
  'F-5 Freedom Fighter', 'B-50 Superfortress',
  'A-10 Thunderbolt II', 'F-14 Tomcat',
];

solution(testFiles2);


// 참고
// https://cyberx.tistory.com/16
// https://spoit.tistory.com/32