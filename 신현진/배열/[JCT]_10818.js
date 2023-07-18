let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let numArr = input[1].split(" ").map(Number);

console.log(Math.min.apply(Math, numArr), Math.max.apply(Math, numArr));
