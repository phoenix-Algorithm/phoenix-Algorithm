// 17413 단어 뒤집기 2

let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

let str = input[0];
let isopen = false;
let answer = "";
let stack = [];

for (let i = 0; i < str.length; i++) {
  if (str[i] === "<") {
    isopen = true;
  } else if (str[i] === ">") {
    answer += str[i];
    isopen = false;
  }

  if (isopen === true) {
    if (stack.length > 0) {
      stack.reverse();
      for (let j = 0; j < stack.length; j++) {
        answer += stack[j];
      }
      answer += str[i];
      stack = [];
    } else {
      answer += str[i];
    }
  } else if (isopen === false && str[i] == ">") {
    continue;
  } else if (isopen === false && str[i] === " ") {
    stack.reverse();
    for (let j = 0; j < stack.length; j++) {
      answer += stack[j];
    }
    answer += str[i];
    stack = [];
  } else {
    stack.push(str[i]);
  }
}

if (stack.length > 0) {
  stack.reverse();
  for (let j = 0; j < stack.length; j++) {
    answer += stack[j];
  }
  stack = [];
}

console.log(answer);
