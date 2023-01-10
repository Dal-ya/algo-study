# 시간초과 실패

def solution(ingredient: list[int]) -> int:
    answer = 0

    HAMBUGER: str     = ''.join(map(str,[1, 2, 3, 1])) # <int -> str> 1231
    _ingredient: str  = ''.join(map(str, ingredient))  # 21123123...
    isLoop: bool      = True

    while(isLoop):
        findIdx: int = _ingredient.find(HAMBUGER)

        if (findIdx == -1):
            isLoop = False;
            break;
        
        answer += 1
        _ingredient = _ingredient.replace(HAMBUGER, '', 1)
        
        
    print(answer)
    return answer

  

#solution([2, 1, 1, 2, 3, 1, 1, 2, 3, 1, 2, 3, 1, 3])

