function solution(begin, end) {
  var answer = [];

  for (let i = begin; i <= end; i++) {
    if (i === 1) {
      answer.push(0);
      continue;
    }

    answer.push(maxDivisor(i));
  }

  return answer;
}

function isPrime(num) {
  if (num === 1) {
    return false;
  }

  if (num === 2) {
    return true;
  }

  const n = parseInt(Math.sqrt(num));

  for (let i = 2; i <= n; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function maxDivisor(num) {
  if (num === 1) {
    return 1;
  }

  if (isPrime(num)) {
    return 1;
  }

  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      return num / i;
    }
  }
}

const r = solution(1, 10);
console.log(r);
