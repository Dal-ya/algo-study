// https://evan-moon.github.io/2019/06/25/hashtable-with-js/
// 직접 주소 테이블
class DirectAddressTable {
  constructor() {
    this.table = [];
  }

  setValue(value) {
    this.table[value] = value;
  }

  getValue(value) {
    return this.table[value];
  }

  getTable() {
    return this.table;
  }
}

const table = new DirectAddressTable();
table.setValue(3);
table.setValue(11);
table.setValue(100);

console.log(table.getTable());
// [ <3 empty items>, 3, <7 empty items>, 11, <88 empty items>, 100 ]

console.log(table.getValue(3)); // 3 key === value

// O(1)
// 값은 없지만 메모리 공간은 할당되어 있는 상황 -> 적재율이 낮다
