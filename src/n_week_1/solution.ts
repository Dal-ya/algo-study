// 타입스크립트 글로벌 설치
// npm install -g typescript

// solution.ts 실행 방법
// $npx ts-node solution.ts

// solution.ts -> solution.js
// $npx tsc solution.ts 

enum Ingredient {
  Bread = 1,
  Vegetable,
  Meat,
}

const correctHambuger: number[] = [
  Ingredient.Bread, 
  Ingredient.Vegetable, 
  Ingredient.Meat, 
  Ingredient.Bread
];

function solution(ingredient: number[]): number {
  let answer = 0;
  
  answer = checkMatchCount<number>(ingredient, correctHambuger.length);

  return answer;
}


function checkMatchCount<T>(arr: T[], length: number): number {
  let matchCount = 0;

  function check(arr: T[], length: number) {
    arr.forEach((val, idx, srcArr) => {
      if(
        JSON.stringify(srcArr.slice(idx, idx + length)) === JSON.stringify(correctHambuger)
      ) {
        ++matchCount;
        srcArr.splice(idx, length);
        check(srcArr, length);
      }
    });
  }

  check(arr, length);
  
  return matchCount;
}

// const r = solution([1, 2, 3, 3, 2, 1, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 1, 3, 3, 1]);
// console.log(r)