// 해시 함수 만들기
// 해시란?
// https://www.md5hashgenerator.com/

function hashFn(key) {
  return key % 10; // 0 ~ 9
}

console.log(hashFn(123456)); // 6
console.log(hashFn(4412455)); // 5

const tableSize = 10;
const hashTable = new Array(tableSize);

hashTable[hashFn(12341)] = 12341;
hashTable[hashFn(12342)] = 12342;
hashTable[hashFn(12349)] = 12349;

console.log(hashTable);

// 문제점 -> 중복 (collision)
// 분리 연결법(Separate Chaining)
// 링크드 리스트 형식으로 해결
