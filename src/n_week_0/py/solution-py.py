from typing import List

def solution(babbling: List[str]):
    availWordCnt = 0;

    for babble in babbling:
      if isAvailWord(babble):
        ++availWordCnt


def isAvailWord(word: str) -> bool:
    if word == '':
       return True
    
    availableWordList = ['aya', 'ye', 'woo', 'ma'];

    for i in len(availableWordList):
        if word.find(availableWordList[i]) == 0:
            word = word.replace(availableWordList[i], '')

            return isAvailWord(word)

    return False



availableWordList: List[str] = ['aya', 'ye', 'woo', 'ma'];

for word, i in enumerate(availableWordList):
    print(word, i)

