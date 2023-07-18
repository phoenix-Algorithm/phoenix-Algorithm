// 3. 나머지

let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs.readFileSync("input.txt").toString().split("\n");

const array = input.map(Number);
let array2 = [];

for (let i = 0; i < 10; i++) {
  array2.push(array[i] % 42);
}

let count = 0;

for (let i = 0; i < 10; i++) {
  for (let j = i + 1; j < 10; j++) {
    if (array2[i] === array2[j]) {
      array2[j] = 42;
    }
  }
}

for (let i = 0; i < 10; i++) {
  if (array2[i] !== 42) {
    count += 1;
  }
}

console.log(count);

// 강의 정답 코드
// 집합을 이용한 풀이
let mySet = new Set();

for (let i = 0; i < 10; i++) {
  mySet.add(array[i] % 42);
}

console.log(mySet.size);
