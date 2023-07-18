let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);

console.log(Math.max.apply(Math, input));
console.log(input.indexOf(Math.max.apply(Math, input)) + 1);
