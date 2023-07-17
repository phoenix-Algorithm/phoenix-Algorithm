let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);

console.log(input[0] * ((input[1] % 100) % 10));
console.log(input[0] * parseInt((input[1] % 100) / 10));
console.log(input[0] * parseInt(input[1] / 100));
console.log(input[0] * input[1]);
