let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let [N, K] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

console.log(arr.sort((a, b) => a - b)[K - 1]);
