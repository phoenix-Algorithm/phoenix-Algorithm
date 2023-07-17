// 4. 빠른 A+B

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let count = Number(input[0]);
let sol = "";

for (i = 1; i <= count; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  sol += a + b + "\n";
}

console.log(sol);
