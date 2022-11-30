function solution(babbling: string[]): number {
  let availWordCnt = 0;

  babbling.forEach((babble) => {
    if (isAvailWord(babble)) {
      ++availWordCnt;
    }
  });

  return availWordCnt;
}

function isAvailWord(word: string): boolean {
  if (!word) {
    return true;
  }

  const availableWordList: string[] = ['aya', 'ye', 'woo', 'ma'];

  for (let i = 0; i < availableWordList.length; i++) {
    if (word.indexOf(availableWordList[i]) === 0) {
      word = word.replace(availableWordList[i], '');

      return isAvailWord(word);
    }
  }

  return false;
}

const babbling = ['aya', 'yee', 'u', 'maa', 'wyeoo'];
const babbling2 = ['ayaye', 'uuuma', 'ye', 'yemawoo', 'ayaa'];

console.log(solution(babbling2));
