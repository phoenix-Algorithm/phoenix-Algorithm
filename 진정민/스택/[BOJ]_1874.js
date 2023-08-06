// 1874 : 스택 수열

let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

let [n, ...arr] = input.map(Number);

const stack = [];
let answer = "";
let count = 1;

for (let i = 0; i < n; i++) {
  const number = arr.shift();

  // count를 활용하여 원본 배열의 index 관리
  while (count <= number) {
    stack.push(count++);
    answer += "+" + "\n";
  }

  // 만들 수 없는 조건문
  const popedItem = stack.pop();
  if (popedItem != number) {
    console.log("NO");
    return;
  }
  answer += "-" + "\n";
}

console.log(answer);
