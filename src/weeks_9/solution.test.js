const solution = require('./solution');

describe('프로그래머스 체육복', () => {
  test('solution test 1', () => {
    const n = 5;
    const lost = [2, 4];
    const reserve = [1, 3, 5];

    expect(solution(n, lost, reserve)).toBe(5);
  });

  test('solution test 2', () => {
    const n = 5;
    const lost = [2, 4];
    const reserve = [3];

    expect(solution(n, lost, reserve)).toBe(4);
  });

  test('solution test 3', () => {
    const n = 3;
    const lost = [3];
    const reserve = [1];

    expect(solution(n, lost, reserve)).toBe(2);
  });

  test('solution test 4', () => {
    const n = 5;
    const lost = [3, 4];
    const reserve = [2, 3, 4];

    expect(solution(n, lost, reserve)).toBe(5);
  });
});