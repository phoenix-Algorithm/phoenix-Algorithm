let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let [N, K] = input.shift().split(" ");
K = Number(K);
input = input.map(Number);

let count = 0;

for (let i = input.length - 1; i >= 0; i--) {
  if (input[i] <= K) {
    count += Math.floor(K / input[i]);
    K = K % input[i];
  }
}

console.log(count);
