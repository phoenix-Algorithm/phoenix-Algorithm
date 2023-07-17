let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let num = input[1].split("").map(Number);
console.log(num.reduce((a, b) => a + b));
