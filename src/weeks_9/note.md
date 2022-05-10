### 탐욕 알고리즘(greedy algorithm)
- https://www.youtube.com/watch?v=CxBYY7XTQvI
- 선택의 순간마다 최적의 상황만을 선택해 해답에 도달하는 방법
- 근사 알고리즘
- 대표 예) 동전 바꾸기 문제
  - [10, 100, 500] -> 710 원 만들기
  - 500 * 1 -> 210
  - 100 * 2 -> 10
  - 19 * 1 -> 0
  - 총 4개 사용해서 해결
- 적용이 안 되는 예
  - [10, 30, 40, 50] -> 70 원 만들기
  - 50 * 1 -> 20
  - 10 * 2 -> 0
  - 총 3개 사용해서 해결?? => 30, 40원 2개로 해결 가능

### 프로그래머스 문제
- https://programmers.co.kr/learn/courses/30/lessons/42862