function solution(board, moves) {
  var answer = 0;
  var bucket = {
    stack: [],
    equalItemRemoveCnt: 0,
    set equalCheckInput(val) {
      if (this.stack.length === 0) {
        this.stack.push(val);
        return;
      }

      var latest = this.stack[this.stack.length - 1];

      if (latest === val) {
        this.stack.pop();
        this.equalItemRemoveCnt += 1;
      } else {
        this.stack.push(val);
      }
    },
  };

  moves.forEach((col) => {
    let isBreakRoop = false;
    board.forEach((row) => {
      if (row[col - 1] !== 0 && !isBreakRoop) {
        bucket.equalCheckInput = row[col - 1];
        row[col - 1] = 0;
        isBreakRoop = true;
      }
    });
  });

  answer = bucket.equalItemRemoveCnt * 2;
  return answer;
}

module.exports = solution;
