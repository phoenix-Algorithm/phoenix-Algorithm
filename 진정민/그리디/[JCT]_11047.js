let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

[N, K] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(Number(input[i]));
}

let answer = 0;

for (let i = N - 1; i >= 0; i--) {
  answer += parseInt(K / arr[i]);
  K %= arr[i];
}

console.log(answer);
