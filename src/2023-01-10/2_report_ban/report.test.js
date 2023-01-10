const solution = require('./report');

describe('신고 결과 받기', () => {
  test('solution test 1', () => {
    const idList = ['muzi', 'frodo', 'apeach', 'neo'];
    const reportList = [
      'muzi frodo',
      'apeach frodo',
      'frodo neo',
      'muzi neo',
      'apeach muzi',
    ];
    const banSendMailNum = 2;

    expect(solution(idList, reportList, banSendMailNum)).toEqual([2, 1, 1, 0]);
  });

  test('solution test 2', () => {
    const idList = ['con', 'ryan'];
    const reportList = ['ryan con', 'ryan con', 'ryan con', 'ryan con'];
    const banSendMailNum = 3;

    expect(solution(idList, reportList, banSendMailNum)).toEqual([0, 0]);
  });

  test('solution test 3', () => {
    const idList = ['mina', 'lily', 'sherlock'];
    const reportList = [
      'sherlock lily',
      'sherlock mina',
      'lily mina',
      'mina lily',
    ];
    const banSendMailNum = 2;

    expect(solution(idList, reportList, banSendMailNum)).toEqual([1, 1, 2]);
  });

  test('solution test 4', () => {
    const idList = ['mina', 'lily', 'sherlock'];
    const reportList = [
      'sherlock lily',
      'sherlock lily',
      'sherlock mina',
      'sherlock mina',
      'sherlock mina',
      'mina lily',
      'mina lily',
      'lily sherlock',
      'lily mina',
    ];
    const banSendMailNum = 3;

    expect(solution(idList, reportList, banSendMailNum)).toEqual([0, 0, 0]);
  });
});
