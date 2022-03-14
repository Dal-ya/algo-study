const solution = require('./puppet_draw');

describe('puppet draw', () => {
  test('solution test 1', () => {
    const board = [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ];
    const moves = [1, 5, 3, 5, 1, 2, 1, 4];

    expect(solution(board, moves)).toBe(4);
  });

  test('solution test 2', () => {
    const board = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];
    const moves = [1, 3, 2];

    expect(solution(board, moves)).toBe(0);
  });

  test('solution test 3', () => {
    const board = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 3, 0, 0, 0],
      [1, 2, 0, 1, 1],
    ];
    const moves = [5, 1, 3, 2];

    expect(solution(board, moves)).toBe(2);
  });
});
