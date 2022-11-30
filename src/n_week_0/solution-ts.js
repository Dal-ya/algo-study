function solution(babbling) {
    var availWordCnt = 0;
    babbling.forEach(function (babble) {
        if (isAvailWord(babble)) {
            ++availWordCnt;
        }
    });
    return availWordCnt;
}
function isAvailWord(word) {
    if (!word) {
        return true;
    }
    var availableWordList = ['aya', 'ye', 'woo', 'ma'];
    for (var i = 0; i < availableWordList.length; i++) {
        if (word.indexOf(availableWordList[i]) === 0) {
            word = word.replace(availableWordList[i], '');
            return isAvailWord(word);
        }
    }
    return false;
}
var babbling = ['aya', 'yee', 'u', 'maa', 'wyeoo'];
var babbling2 = ['ayaye', 'uuuma', 'ye', 'yemawoo', 'ayaa'];
console.log(solution(babbling2));
// console.log(isAvailWord('woo'));
