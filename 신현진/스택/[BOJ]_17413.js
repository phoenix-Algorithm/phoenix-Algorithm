let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("");

let temp = [];
let open = false;
let answer = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] == "<") {
    if (temp.length > 0) {
      answer = answer.concat(temp);
      temp = [];
    }
    answer.push("<");
    open = true;
  } else if (input[i] == ">") {
    answer.push(">");
    open = false;
  } else {
    if (open) {
      // 괄호 안에 있는 거는 그대로
      answer.push(input[i]);
    } else {
      // 다른거는 거꾸로
      if (input[i] == " ") {
        temp.push(" ");
        answer = answer.concat(temp);
        temp = [];
      } else {
        temp.unshift(input[i]);
      }
    }
  }
}

if (!open) {
  answer = answer.concat(temp);
}

console.log(answer.join(""));
