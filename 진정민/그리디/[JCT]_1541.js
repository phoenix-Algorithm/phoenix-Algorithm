// 1541 : 잃어버린 괄호

let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

let gropus = input[0].split("-");
let answer = 0;

for (let i = 0; i < gropus.length; i++) {
  let cur = gropus[i]
    .split("+")
    .map(Number)
    .reduce((a, b) => a + b);
  if (i == 0) {
    answer += cur;
  } else {
    answer -= cur;
  }
}

console.log(answer);
