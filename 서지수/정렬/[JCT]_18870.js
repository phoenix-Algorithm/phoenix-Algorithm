// 3-1. 좌표 압축

// 나의 풀이
// 메모리 초과
const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0]);
const inputArr = input[1].split(" ").map(Number);
let answer = "";
const inputSet = [...new Set(inputArr)];
// 이렇게 하면 시간 초과가 남
// const inputSet = new Array(...new Set(inputArr));

for (const i in inputArr) {
  let count = 0;
  for (const j in inputSet) {
    if (inputArr[i] > inputSet[j]) {
      count++;
    }
  }
  answer += count + " ";
}

console.log(answer);

// 강의 풀이
/*
1. 중복 제거를 위해 집합으로 만든다.
2. 정렬한다.
3. Dictionary를 이용해 매핑한다.
*/
inputSet.sort((a, b) => a - b);

let myMap = new Map();
for (let i = 0; i < inputSet.length; i++) {
  myMap.set(inputSet[i], i);
}

for (const x of inputArr) {
  answer += myMap.get(x) + " ";
}

console.log(answer);
