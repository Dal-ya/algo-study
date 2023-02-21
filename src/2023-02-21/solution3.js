/*
* table {
*   key: number[]
    1: [3,4,5] // value=4
* }
*/
function solution(numbers) {
  //     const sorted = [...new Set(numbers)].sort()
  //     return numbers.map(num => binarySearch(sorted,num))

  const result = Array(numbers.length).fill(-1);
  //[...4,4,4,....]
  const mappedKeys = [];
  const table = new Map();
  let last;
  for (let key in numbers) {
    key *= 1;
    const value = numbers[key] * 1;
    if (table.has(value)) {
      table.get(value).push(key * 1);
    } else {
      table.set(value, [key]);
    }

    if (last && last < value) {
      table.forEach((mappedValue, mappedKey, map) => {
        if (mappedKey < value) {
          mappedValue.forEach((idx) => {
            result[idx] = value * 1;
          });
          map.delete(mappedKey);
        }
      });
    }
    last = value;
  }
  return result;
}
