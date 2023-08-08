let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let N = Number(input.shift());
let arr = input.map((v) => v.split(" ").map(Number));

let answer = "";

arr
  .sort((a, b) => (a[1] != b[1] ? a[1] - b[1] : a[0] - b[0]))
  .forEach((v) => (answer += `${v[0]} ${v[1]}\n`));

console.log(answer);
