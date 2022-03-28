const solution = require('./matrix_rotation');

describe('행렬 테두리 회전하기', () => {
  test('solution test 1', () => {
    const queries = [
      [2, 2, 5, 4],
      [3, 3, 6, 6],
      [5, 1, 6, 3],
    ];
    expect(solution(6, 6, queries).toEqual([8, 10, 25]));
  });
});
