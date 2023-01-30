// 일의 자리 숫자 6 이상이면, 올림
// 일의 자리 숫자가 5이면, 십의 자리 숫자를 확인
//    십의 자리 숫자가 5 이상이면 올림 4 이하면 내림
// 일의 자리 숫자가 4 이하면 내림
// 0이 될 때까지 반복

function solution(storey) {
  let answer = 0;

  if (storey === 0) {
    return 0;
  }

  function check(storey) {
    if (storey === 0) {
      return;
    }

    let units = Number(storey.toString().at(-1)); // 일의 자리
    let tens = Number(storey.toString().at(-2)) || null; // 십의 자리

    // 일의 자리 숫자가 0이면 해당 0을 제외한 나머지 숫자로 다시 확인
    if (units === 0 && storey.toString().length > 1) {
      storey = Number(storey.toString().slice(0, -1));
      units = Number(storey.toString().at(-1)); // 일의 자리
      tens = Number(storey.toString().at(-2)) || null; // 십의 자리
    }

    // console.log(units, tens);

    if (units >= 6) {
      answer = answer + (10 - units);
      storey = storey + (10 - units);
    } else if (units === 5) {
      if (tens >= 5) {
        answer = answer + 5;
        storey = storey + 5;
      } else {
        answer = answer + 5;
        storey = storey - 5;
      }
    } else {
      answer = answer + units;
      storey = storey - units;
    }

    check(storey);
  }

  check(storey);

  return answer;
}

const r = solution(2554);
console.log('result: ', r);
