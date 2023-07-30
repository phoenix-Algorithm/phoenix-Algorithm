let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let stack = [];
let answer = [];
let num = input.shift();

for (let i = 0; i < num; i++) {
  if (input[i].includes("push")) {
    let pushNum = input[i].split(" ");
    stack.push(Number(pushNum[1]));
  } else if (input[i].includes("top")) {
    answer.push(stack.length === 0 ? -1 : stack[stack.length - 1]);
  } else if (input[i].includes("pop")) {
    if (stack.length > 0) {
      let popNum = stack.pop();
      answer.push(popNum);
    } else {
      answer.push(-1);
    }
  } else if (input[i].includes("size")) {
    answer.push(stack.length);
  } else if (input[i].includes("empty")) {
    answer.push(stack.length === 0 ? 1 : 0);
  }
}
console.log(answer.join("\n"));
