let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);

let arr = Array(n)
  .fill(0)
  .map((_, index) => index + 1);

for (let i = 1; i <= m; i++) {
  let [a, b] = input[i].split(" ");
  let slice = arr.slice(a - 1, b).reverse();

  arr.splice(a - 1, b - a + 1, ...slice);
}

console.log(...arr);
