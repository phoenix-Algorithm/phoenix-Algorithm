// 5. 곱셈

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let line1 = parseInt(input[0]);
let line2 = input[1];

console.log(line1 * parseInt(line2[2]));
console.log(line1 * parseInt(line2[1]));
console.log(line1 * parseInt(line2[0]));
console.log(line1 * parseInt(line2));
