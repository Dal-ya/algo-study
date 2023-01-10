function solution(id_list, report, k) {
  var answer = [];

  let infoList = genInfoList(id_list);
  // console.log('gen info list: ', infoList);

  infoList = writeReportId(infoList, report);
  // console.log('write report id list: ', infoList);

  infoList = genReportedIdList(infoList);
  // console.log('gen reported id list: ', infoList);

  infoList = sendBanInfoMail(infoList, k);
  // console.log('send ban info mail: ', infoList);

  infoList.forEach((info) => {
    answer.push(info.mailCnt);
  });

  // console.log('answer: ', answer)

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
        info.reportId = [...new Set(info.reportId)];
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
  let banIdList = [];

  infoList.forEach((info) => {
    if (info.reportedCnt === banCnt) {
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

module.exports = solution;
