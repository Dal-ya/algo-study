from collections import Counter
def solution(topping):
    answer = 0
    me = Counter(topping)
    
    print(me)
    # Counter({1: 4, 2: 2, 3: 1, 4: 1})
    
    bro = {}

    for i in range(len(topping)) :
        if topping[i] in bro :
            bro[topping[i]] += 1
        else :
            bro[topping[i]] = 1
        me[topping[i]] -= 1

        if me[topping[i]] == 0 :
            del me[topping[i]]

        if len(bro) == len(me) :
            answer +=1

    print(answer)
    return answer


solution(["a", "b", "a", "c", "a", "d", "a", "b"])


# 내가 먼저 토핑을 다 갖고 하나씩 동생에게 주면서 가지고 있는 토핑 목록의 길이를 확인한다.
