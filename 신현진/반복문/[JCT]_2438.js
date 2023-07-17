let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let num = ~~input[0];

for (let i = 1; i <= num; i++) {
  console.log("*".repeat(i));
}
