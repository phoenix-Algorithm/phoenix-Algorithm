let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split(/\b/g);

let newArr = input.join("").split("-");

let hasPlusSum = 0;
let answer = 0;

for (let i = 0; i < newArr.length; i++) {
  if (newArr[i].includes("+")) {
    hasPlusSum = newArr[i]
      .split("+")
      .map(Number)
      .reduce((a, b) => a + b);
    newArr[i] = hasPlusSum;
  }
  answer = newArr.reduce((a, b) => a - b);
}

console.log(answer);
