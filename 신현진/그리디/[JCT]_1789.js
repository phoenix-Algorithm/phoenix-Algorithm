let fs = require("fs");
let S = +fs.readFileSync("./input.txt").toString().trim();

let count = 0;
let num = 0;

for (let i = 1; num <= S; i++) {
  num += i;
  count++;
}

console.log(count - 1);
