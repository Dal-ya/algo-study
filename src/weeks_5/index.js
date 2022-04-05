// 재귀 알고리즘

// [칸 아카데미]
// https://ko.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/recursion

// 러시아 인형

// 5! = 1 * 2 * 3 * 4 * 5 ==> 120

// n⋅(n−1)⋅(n−2)⋯2⋅1

// 하위 문제
// 5! = 5 * 4!
// 4! = 4 * 3!
// ...
// n!=n⋅(n−1)!

// 0! 은 곱셈의 항등원인 1과 같다고 정의합니다.

// n은 양수
// 만약 음수이면?

// [재귀 알고리즘의 바탕이 되는 기본 개념]
// 어떤 문제를 해결하기 위해, 문제의 범위보다 약간 좁은 "하위 문제"를 해결합니다.
// 그다음에 하위 문제에 대한 해답을 이용하여 원래 문제를 해결합니다.
// (n−1)! (범위가 더 좁은 하위 문제) 을 계산하는 방식

// 재귀의 반복 개념
// 1. 재귀의 호출은 같은 문제 내에서 더 범위가 작은 값, 즉, 하위 문제에 대해 이루어져야 한다.
// 2. 재귀함수 호출은 더 이상 반복되지 않는 base case에 도달해야 한다. (음수는 안 됨 음수는 계속 작아짐)

// https://ko.javascript.info/task/factorial
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
