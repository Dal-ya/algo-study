const solution = require('./press_char');

describe('press char', () => {
  test('solution test 1', () => {
    const s = 'aabbaccc';
    expect(solution(s)).toBe(7);
  });

  test('solution test 2', () => {
    const s = 'ababcdcdababcdcd';
    expect(solution(s)).toBe(9);
  });

  test('solution test 3', () => {
    const s = 'abcabcdede';
    expect(solution(s)).toBe(8);
  });

  test('solution test 4', () => {
    const s = 'abcabcabcabcdededededede';
    expect(solution(s)).toBe(14);
  });

  test('solution test 5', () => {
    const s = 'xababcdcdababcdcd';
    expect(solution(s)).toBe(17);
  });
});
