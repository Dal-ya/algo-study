const arr = ['a', 'b', 'c', 'a', 'b', 'a'];

const obj = {};

for (key of arr) {
  obj[key] = (obj[key] || 0) + 1;
}

console.log(obj);
// {a: 3, b: 2, c: 1}

const arr2 = [1, 2, [3, 4]];

// To flat single level array
arr2.flat();

console.log(arr2);
