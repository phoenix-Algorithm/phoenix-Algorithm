let fs = require("fs");
let input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let N = input.shift();

//빈 스택 생성
let stack = [];

//답을 위한 배열
let answer = [];

//1부터 N까지 순서대로 넣어야 함
let stackNum = 1;

for (let i = 0; i < N; i++) {
  while (stackNum <= input[i]) {
    stack.push(stackNum);
    stackNum++;
    answer.push("+");
  }

  // stack에 input[i]까지 들어갔으므로 pop을 하면 input[i]가 나옴
  let stackPop = stack.pop();
  answer.push("-");

  // 만약 stack에서 pop한 값과 input[i]가 일치하지않는다면
  if (stackPop !== input[i]) {
    // ans 배열을 ["NO"]로 교체하고 for문 종료
    answer = ["NO"];
    break;
  }
}

console.log(answer.join("\n"));
