// 3-1. 주유소

// 강의 풀이 본 후 내 풀이
let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0]);
const length = input[1].split(" ").map(Number);
const price = input[2].split(" ").map(Number);

let sum = BigInt(0);
let minPrice = price[0];

for (let i = 0; i < N - 1; i++) {
  if (minPrice > price[i]) {
    minPrice = price[i];
  }
  sum += BigInt(length[i]) * BigInt(minPrice);
}

console.log(String(sum));
