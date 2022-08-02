function solution(genres, plays) {
  var answer = [];

  const album = {};

  genres.forEach((genre, idx) => {
    // 장르가 없는 경우 생성
    if (!(genre in album)) {
      album[genre] = {
        totalPlays: 0,
        firstSecondPlayCnt: [0, 0],
        firstSecondPlayId: [],
      };
    }

    // 플레이 수
    const playCnt = plays[idx];

    // total play 값 구하기
    album[genre].totalPlays += playCnt;

    // 1등, 2등 구하기
    if (playCnt > album[genre].firstSecondPlayCnt[0]) {
      album[genre].firstSecondPlayCnt[1] = album[genre].firstSecondPlayCnt[0];
      album[genre].firstSecondPlayId[1] = album[genre].firstSecondPlayId[0];

      album[genre].firstSecondPlayCnt[0] = playCnt;
      album[genre].firstSecondPlayId[0] = idx;
    } //
    else if (playCnt > album[genre].firstSecondPlayCnt[1]) {
      album[genre].firstSecondPlayCnt[1] = playCnt;
      album[genre].firstSecondPlayId[1] = idx;
    }
  });

  console.log('album: ', album);

  let albumList = [];

  for (obj in album) {
    albumList.push(album[obj]);
  }

  // 내림차순 정렬
  albumList = albumList.sort((a, b) => b.totalPlays - a.totalPlays);

  // console.log(albumList);

  albumList.forEach((album) => {
    answer.push(...album.firstSecondPlayId);
  });

  answer = answer.filter((el) => el !== undefined);
  console.log(answer);

  return answer;
}

// const album = {
//   genres: 'classic', // 장르
//   totalPalys: 1000, // 총 플레이 수
//   firstSecondPlayId: [1, 2], // 플레이수 1등, 2등 아이디(인덱스)
// };

// const album = {
//   classic: {
//     totalPlays: 1000,
//     firstSecondPlayId: [1, 2],
//     firstSecondPlayCnt: [0, 0]
//   },

//   pop: {
//     totalPlays: 3000,
//     firstSecondPlayId: [3, 4],
//     firstSecondPlayCnt: [0, 0]
//   },
// };

const genres = ['classic', 'pop', 'classic', 'classic', 'kpop'];
const plays = [500, 600, 150, 800, 2500];

solution(genres, plays);
