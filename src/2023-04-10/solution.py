# 한 상자에 담으려는 귤의 개수 k
# 귤의 크기를 담은 배열 tangerine
from collections import Counter

def solution(k, tangerine):
    answer = 0

    a = Counter(tangerine)
    b = a.items();
    print(b)
    



    return answer

solution(2, [1,1,1,2,2,5,5,5,5])