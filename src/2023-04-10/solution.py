# 한 상자에 담으려는 귤의 개수 k
# 귤의 크기를 담은 배열 tangerine
from collections import Counter

def solution(k, tangerine):
    answer = 0
    tempList = []
    tangCounter = Counter(tangerine)
    for key, val in tangCounter.items():
        tempList.append([key, val])

    # 2차원 배열 sort
    # https://haesoo9410.tistory.com/193
    tempList.sort(key=lambda x: (x[1], -x[1]), reverse=True)
    # print(tempList)

    for i in range(len(tempList)):
        # print(k)
        k = k - tempList[i][1]
        if k <= 0:
            answer = i + 1
            break

    # print(answer)
    return answer

solution(6, [1, 3, 2, 5, 4, 5, 2, 3]);