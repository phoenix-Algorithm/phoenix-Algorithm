let fs = require("fs");
let [N, ...input] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

N = Number(N);
input = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let answer = 0;
let sum = 0;

for (let i = 0; i < input.length; i++) {
  answer += sum + input[i];
  sum += input[i];
}
console.log(answer);
