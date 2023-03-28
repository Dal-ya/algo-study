function solution(toppings) {
  let answer = 0;

  let myTopping = {};
  let brotherTopping = {};

  myTopping = { ...new Counter(toppings) };

  let myEntry = Object.entries(myTopping);
  let broEntry = Object.entries(brotherTopping);

  myTopping = new Map(myEntry);
  brotherTopping = new Map(broEntry);

  console.log(myTopping);
  // { a: 4, b: 2, c: 1, d: 1 }

  toppings.forEach((_, idx) => {
    if (brotherTopping.get(toppings[idx])) {
      // brotherTopping[toppings[idx]] += 1;
      brotherTopping.set(toppings[idx], brotherTopping.get(toppings[idx]) + 1);
    } else {
      // brotherTopping[toppings[idx]] = 1;
      brotherTopping.set(toppings[idx], 1);
    }

    // myTopping[toppings[idx]] -= 1;
    myTopping.set(toppings[idx], myTopping.get(toppings[idx]) - 1);

    // if (myTopping[toppings[idx]] === 0) {
    //   delete myTopping[toppings[idx]];
    // }

    if (myTopping.get(toppings[idx]) === 0) {
      myTopping.delete(toppings[idx]);
    }

    if (myTopping.size === brotherTopping.size) {
      answer += 1;
    }
  });

  console.log(answer);
  return answer;
}

// https://stackoverflow.com/questions/26320253/is-there-a-javascript-function-similar-to-the-python-counter-function
function Counter(array) {
  array.forEach((val) => (this[val] = (this[val] || 0) + 1));
}

solution([1, 2, 1, 3, 1, 4, 1, 2]);
