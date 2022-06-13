// https://www.youtube.com/watch?v=78OXrbOML00
// 다리를 지나는 트럭

function solution(bridge_length, weight, truck_weights) {
  var timeCount = 0;

  // 배열 채우기
  const bridge = new Array(bridge_length).fill(0);

  let currentBridgeWeight = 0;

  while (truck_weights.length) {
    timeCount += 1;

    bridge.shift();

    currentBridgeWeight = bridge.reduce((prev, curr) => {
      return prev + curr;
    }, 0);

    // 잔여 중량 확인 후 트럭 건너기
    if (currentBridgeWeight + truck_weights[0] <= weight) {
      bridge.push(truck_weights.shift());
    } else {
      bridge.push(0);
    }
  }

  return timeCount + bridge_length;
}
