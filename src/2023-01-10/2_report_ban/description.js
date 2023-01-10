function solution(id_list, report, k) {
  var answer = [];

  let infoList = genInfoList(id_list);
  // console.log('gen info list: ', infoList);
  /*
    [
      { id: 'muzi', reportId: [], reportedCnt: 0, mailCnt: 0 },
      { id: 'frodo', reportId: [], reportedCnt: 0, mailCnt: 0 },
      { id: 'apeach', reportId: [], reportedCnt: 0, mailCnt: 0 },
      { id: 'neo', reportId: [], reportedCnt: 0, mailCnt: 0 }
    ]
  */

  infoList = writeReportId(infoList, report);
  // console.log('write report id list: ', infoList);
  /*
    [
      {
        id: 'muzi',
        reportId: ['frodo', 'neo'], // Set 을 이용해 중복 제거
        reportedCnt: 0,
        mailCnt: 0,
      },
      { id: 'frodo', reportId: ['neo'], reportedCnt: 0, mailCnt: 0 },
      {
        id: 'apeach',
        reportId: ['frodo', 'muzi'],
        reportedCnt: 0,
        mailCnt: 0,
      },
      { id: 'neo', reportId: [], reportedCnt: 0, mailCnt: 0 },
    ];
  */

  infoList = genReportedIdList(infoList);
  // 신고 당한 수를 담아 반환한다.
  // console.log('gen reported id list: ', infoList);
  /*
    [
      {
        id: 'muzi',
        reportId: ['frodo', 'neo'], 
        reportedCnt: 1,
        mailCnt: 0,
      },
      { id: 'frodo', reportId: ['neo'], reportedCnt: 2, mailCnt: 0 },
      {
        id: 'apeach',
        reportId: ['frodo', 'muzi'],
        reportedCnt: 0,
        mailCnt: 0,
      },
      { id: 'neo', reportId: [], reportedCnt: 2, mailCnt: 0 },
    ];
  */

  infoList = sendBanInfoMail(infoList, k);
  // console.log('send ban info mail: ', infoList);
  /*
    [
      {
        id: 'muzi',
        reportId: ['frodo', 'neo'],
        reportedCnt: 1,
        mailCnt: 2,
      },
      { id: 'frodo', reportId: ['neo'], reportedCnt: 2, mailCnt: 1 },
      {
        id: 'apeach',
        reportId: ['frodo', 'muzi'],
        reportedCnt: 0,
        mailCnt: 1,
      },
      { id: 'neo', reportId: [], reportedCnt: 2, mailCnt: 0 },
    ];
  */

  infoList.forEach((info) => {
    answer.push(info.mailCnt);
  });

  // console.log('answer: ', answer);
  // [ 2, 1, 1, 0 ]

  return answer;
}

function genInfoList(idList) {
  return idList.map((id) => {
    return {
      id,
      reportId: [],
      reportedCnt: 0,
      mailCnt: 0,
    };
  });
}

function writeReportId(infoList, reportList) {
  const splitReportList = reportList.map((id) => id.split(' '));

  infoList.forEach((info) => {
    for (let i = 0; i < splitReportList.length; i++) {
      if (info.id === splitReportList[i][0]) {
        info.reportId.push(splitReportList[i][1]);
        info.reportId = [...new Set(info.reportId)]; // 신고는 중복 안 됨
      }
    }
  });

  return infoList;
}

function genReportedIdList(infoList) {
  let reportedIdList = [];

  infoList.forEach((info) => {
    reportedIdList.push(...info.reportId);
  });

  infoList.forEach((info) => {
    info.reportedCnt = reportedIdList.filter((id) => info.id === id).length;
  });

  return infoList;
}

function sendBanInfoMail(infoList, banCnt) {
  let banIdList = []; // ban 당한 id list

  infoList.forEach((info) => {
    if (info.reportedCnt >= banCnt) {
      banIdList.push(info.id);
    }
  });

  infoList.forEach((info) => {
    info.reportId.forEach((id) => {
      if (banIdList.includes(id)) {
        info.mailCnt += 1;
      }
    });
  });

  return infoList;
}

// const idList = ['muzi', 'frodo', 'apeach', 'neo'];
// const reportList = [
//   'muzi frodo',
//   'apeach frodo',
//   'frodo neo',
//   'muzi neo',
//   'apeach muzi',
// ];
// const banSendMailNum = 2;

// solution(idList, reportList, banSendMailNum);

module.exports = solution;
